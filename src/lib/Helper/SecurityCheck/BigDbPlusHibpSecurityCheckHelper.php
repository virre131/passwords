<?php
/**
 * This file is part of the Passwords App
 * created by Marius David Wieschollek
 * and licensed under the AGPL.
 */

namespace OCA\Passwords\Helper\SecurityCheck;

use OCA\Passwords\Services\ConfigurationService;
use OCA\Passwords\Services\FileCacheService;
use OCA\Passwords\Services\LoggingService;
use OCP\Http\Client\IClientService;

/**
 * Class BigDbPlusHibpSecurityCheckHelper
 *
 * @package OCA\Passwords\Helper\SecurityCheck
 */
class BigDbPlusHibpSecurityCheckHelper extends AbstractSecurityCheckHelper {

    const PASSWORD_DB = 'bigdb+hibp';

    /**
     * @var BigLocalDbSecurityCheckHelper
     */
    protected $localSecurityCheck;

    /**
     * @var HaveIBeenPwnedHelper
     */
    protected $hibpSecurityCheck;

    /**
     * BigDbPlusHibpSecurityCheckHelper constructor.
     *
     * @param LoggingService                $logger
     * @param IClientService                $httpClientService
     * @param FileCacheService              $fileCacheService
     * @param UserRulesSecurityCheck        $userRulesCheck
     * @param HaveIBeenPwnedHelper          $hibpSecurityCheck
     * @param ConfigurationService          $configurationService
     * @param BigLocalDbSecurityCheckHelper $localSecurityCheck
     */
    public function __construct(
        LoggingService $logger,
        IClientService $httpClientService,
        FileCacheService $fileCacheService,
        UserRulesSecurityCheck $userRulesCheck,
        HaveIBeenPwnedHelper $hibpSecurityCheck,
        ConfigurationService $configurationService,
        BigLocalDbSecurityCheckHelper $localSecurityCheck
    ) {
        parent::__construct($logger, $httpClientService, $fileCacheService, $userRulesCheck, $configurationService);
        $this->localSecurityCheck = $localSecurityCheck;
        $this->hibpSecurityCheck  = $hibpSecurityCheck;
    }

    /**
     * @inheritdoc
     *
     * @param string $hash
     *
     * @return bool
     * @throws \Exception
     */
    public function isHashSecure(string $hash): bool {
        return $this->localSecurityCheck->isHashSecure($hash) && $this->hibpSecurityCheck->isHashSecure($hash);
    }

    /**
     * Refresh the locally stored database with password hashes
     *
     * @return void
     * @throws \Throwable
     */
    function updateDb(): void {
        $this->localSecurityCheck->updateDb();
        $this->config->setAppValue(self::CONFIG_DB_TYPE, static::PASSWORD_DB);
    }

    /**
     * @inheritdoc
     */
    function dbUpdateRequired(): bool {
        return $this->localSecurityCheck->dbUpdateRequired() || parent::dbUpdateRequired();
    }
}