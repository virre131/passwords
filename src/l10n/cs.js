(function() {
    let translations = {
            'Passwords'                           : 'Správce hesel',
            'All'                                 : 'Vše',
            'Folders'                             : 'Složky',
            'Recent'                              : 'Nedávné',
            'Favorites'                           : 'Oblíbené',
            'Shared'                              : 'Sdílené',
            'Tags'                                : 'Značky',
            'Security'                            : 'Bezpečnost',
            'Trash'                               : 'Koš',
            'Details'                             : 'Podrobnosti',
            'Edit'                                : 'Upravit',
            'Rename'                              : 'Přejmenovat',
            'Delete'                              : 'Smazat',
            'Restore'                             : 'Obnovit',
            'New Password'                        : 'Nové heslo',
            'New Folder'                          : 'Nová složka',
            'New Tag'                             : 'Nová značka',
            'Secure'                              : 'Bezpečné',
            'Weak'                                : 'Slabé',
            'Weak (Duplicate)'                    : 'Slabé (Duplikát)',
            'Weak (Outdated)'                     : 'Slabé (Zastaralý)',
            'Breached'                            : 'Velmi nebezpečné',
            'Notes'                               : 'Poznámky',
            'Share'                               : 'Sdílet',
            'Revisions'                           : 'Revize',
            'QR Code'                             : 'QR kód',
            'Password'                            : 'Heslo',
            'Username'                            : 'Uživatelské jméno',
            'Website'                             : 'Web',
            'Add Tags...'                         : 'Přidat značky...',
            'Color'                               : 'Barva',
            'Name'                                : 'Jméno',
            'Label'                               : 'Označení',
            'General'                             : 'Obecné',
            'Properties'                          : 'Vlastnosti',
            'Numbers'                             : 'Čísla',
            'Special Characters'                  : 'Speciální znaky',
            'More Options'                        : 'Další možnosti',
            'Favorite'                            : 'Oblíbené',
            'Encryption'                          : 'Šifrování',
            'On the server'                       : 'Na serveru',
            'Custom Fields'                       : 'Vlastní pole',
            'Secret'                              : 'Tajemství',
            'File'                                : 'Soubor',
            'Value'                               : 'Hodnota',
            'Toggle visibility'                   : 'Přepnout viditelnost',
            'Generate password'                   : 'Vygenerovat heslo',
            'Simple Server Side Encryption V1'    : 'Jednoduché šifrování na straně serveru v1',
            'Take some notes'                     : 'Prostor pro Vaše poznámky.',
            'Save'                                : 'Uložit',
            'Create folder'                       : 'Vytvořit složku',
            'Folder created'                      : 'Složka vytvořena',
            'Creating folder failed'              : 'Vytvoření složky selhalo',
            'Rename folder'                       : 'Přejmenovat složku',
            'Folder renamed'                      : 'Složka přejmenována',
            'Renaming folder failed'              : 'Přejmenování se nezdařilo',
            'Folder moved'                        : 'Složka přesunuta',
            'Moving folder failed'                : 'Přesunutí složky se nezdařilo',
            'Delete folder'                       : 'Smazat složku',
            'Do you want to delete the folder'    : 'Opravdu si přejete tuto složku smazat',
            'Folder deleted'                      : 'Složka smazána',
            'Deleting folder failed'              : 'Mazání složky selhalo',
            'Folder restored'                     : 'Složka obnovena',
            'Restoring folder failed'             : 'Obnova složky se nezdařila',
            'Create tag'                          : 'Vytvořit tag',
            'Tag created'                         : 'Tag vytvořen',
            'Creating tag failed'                 : 'Vytvoření tagu se nezdařilo',
            'Edit tag'                            : 'Upravit tag',
            'Tag saved'                           : 'Tag uložen',
            'Saving tag failed'                   : 'Uložení tagu selhalo',
            'Delete tag'                          : 'Odstranit tag',
            'Do you want to delete the tag'       : 'Opravdu si přejete tento tag odstranit?',
            'Tag deleted'                         : 'Tag odstraněn',
            'Deleting tag failed'                 : 'Mazání tagu selhalo',
            'Tag restored'                        : 'Tag obnoven',
            'Restoring tag failed'                : 'Obnova tagu se nezdařila',
            'Create password'                     : 'Vytvořit heslo',
            'Password created'                    : 'Heslo vytvořeno',
            'Creating password failed'            : 'Vytváření heslo se nezdařilo',
            'Edit password'                       : 'Upravit heslo',
            'Password saved'                      : 'Heslo uloženo',
            'Saving password failed'              : 'Uložení hesla selhalo',
            'Password moved'                      : 'Heslo přesunuto',
            'Moving password failed'              : 'Přesunutí hesla se nezdařilo',
            'Delete password'                     : 'Smazat heslo',
            'Do you want to delete the password'  : 'Opravdu si přejete toto heslo smazat?',
            'Password deleted'                    : 'Heslo odstraněno',
            'Password restored'                   : 'Heslo obnoveno',
            'Restoring password failed'           : 'Obnova hesla se nezdařila',
            'Open Url'                            : 'Otevřít URL',
            'Copy Url'                            : 'Kopírovat URL',
            'Copy User'                           : 'Kopírovat uživatele',
            'Copy Password'                       : 'Kopírovat heslo',
            '{element} was copied to clipboard'   : '{element} - uloženo do schránky',
            'Last modified on {date}'             : 'Poslední úprava: {date}',
            'Restore revision'                    : 'Obnovit předchozí verze',
            'Revision restored'                   : 'Obnoveno',
            'Restoring revision failed'           : 'Obnova selhala',
            'Do you want to restore the revision?': 'Chcete obnovit tuto revizi?',
            'Shared with you'                      : 'Sdíleno s Vámi',
            'Shared by you'                        : 'Sdíleno s ostatními',
            'Statistics'                          : 'Statistika',
            'Created on'                          : 'Vytvořeno dne',
            'Last updated'                        : 'Naposledy upraveno',
            '{count} revisions'                   : '{count} revizí',
            'Shares'                              : 'Sdílení',
            '{count} shares'                      : '{count} sdílení',
            'More'                                : 'Více',
            'Backup and Restore'                  : 'Záloha a obnovení',
            'Browser Extension'                   : 'Rozšíření prohlížeče',
            'Handbook'                            : 'Příručka',
            'Apps and Extensions'                 : 'Apps & Extensions',
            'Search user'                         : 'Hledat uživatele',
            'Set expiration date'                 : 'Nastavte vypršení platnosti',
            'Expires {date}'                      : 'Vyprší dne {date}',
            'Choose expiration date'              : 'Vyberte den ukončení platnosti sdílení',
            'Please choose a date in the future'  : 'Vyberte datum z budoucnosti, prosím',
            'Invalid date'                        : 'Neplatné datum',
            'The user {uid} does not exist'       : 'Uživatel {uid} neexistuje',
            'Unable to share password: {message}' : 'Heslo není možné sdílet: {message}',
            'Toggle write permissions'            : 'Umožnit zápis',
            'Toggle share permissions'            : 'Umožnit sdílení',
            'Stop sharing'                        : 'Zastavit sdílení',
            'Date'                                : 'Datum',
            'Default Cache (0 files, 0 B)'        : 'Výchozí cache (0 souborů, 0 B)',
            'Avatars Cache (0 files, 0 B)'        : 'Cache profilových obrázků (0 souborů, 0 B)',
            'Favicon Cache (0 files, 0 B)'        : 'Cache Favicon (0 souborů, 0 B)',
            'Preview Cache (0 files, 0 B)'        : 'Cache náhledů (0 souborů, 0 B)',
            'Passwords Cache (0 files, 0 B)'      : 'Cache hesel (0 souborů, 0 B)',
            'Backup or export'                    : 'Záloha a export',
            'Choose Format'                       : 'Zvolte formát',
            'Please choose'                       : 'Vyberte si prosím',
            'Database Backup'                     : 'Záloha databáze',
            'Predefined CSV'                      : 'Předdefinované CSV',
            'Backup password'                     : 'Zálohovat heslo',
            '(Optional) Encrypts the backup'      : '(Volitelné) Zašifrovat zálohu',
            'The import only supports CSV'        : 'Import je možný pouze z CSV souboru',
            'Export Passwords'                    : 'Exportovat hesla',
            'Export Folders'                      : 'Exportovat hesla',
            'Export Tags'                         : 'Exportovat tagy',
            'FolderLabel'                         : 'OznaceniSlozky',
            'TagLabels'                           : 'Tagy',
            'ParentLabel'                         : 'OznaceniRodice',
            'FolderId'                            : 'IDSlozky',
            'TagIds'                              : 'IDTagu',
            'ParentId'                            : 'IDRodice',
            'Empty'                               : 'Prázdné',
            'Add Header Line'                     : 'Přidat záhlaví',
            'Export passwords shared with me'     : 'Exportovat hesla sdílená s Vámi',
            'Don\'t edit passwords shared with me': 'Neupravovat s Vámi sdílená hesla ',
            'Run Export'                          : 'Spustit export',
            'Export'                              : 'Export',
            'Waiting...'                          : 'Čekejte prosím...',
            'Export error'                        : 'Export selhal',
            'Download {format}'                   : 'Stáhnout {format}',
            'Nothing to export'                   : 'Není co exportovat',
            'There is no data to export'          : 'Nejsou dostupná žádná data pro export',
            'Restore or import'                   : 'Obnovit/Importovat',
            'Passwords CSV'                       : 'Hesla v CSV',
            'Folder CSV'                          : 'Složky v CSV',
            'Custom CSV'                          : 'Vlastní CSV',
            'Other / Custom CSV'                  : 'Vlastní CSV',
            'Select File'                         : 'Vyberte soubor',
            'Select Options'                      : 'Možnosti',
            'Conflict handling'                   : 'O konfliktech',
            'Skip if same revision'               : 'Přeskočit, pokud stejné revizi',
            'Skip always'                         : 'Přeskočte vždy',
            'Overwrite existing'                  : 'Přepsat existující',
            'Merge with existing'                 : 'Sloučit s existujícími',
            'Create new entry'                    : 'Vytvořte nový záznam',
            'For encrypted backups'               : 'Šifrovaná záloha',
            'CSV Options'                         : 'Možnosti CSV',
            'Database'                            : 'Databáze',
            'Quote Character'                     : 'Uvozující znak',
            'Escape Character'                    : 'Únikový znak',
            'Field Delimiter'                     : 'Oddělovač',
            'Quote'                               : 'Uvozovky',
            'Single Quote'                        : 'Apostrof',
            'Backslash'                           : 'Zpětné lomítko',
            'Detect'                              : 'Rozpoznat',
            'Comma'                               : 'Čárka',
            'Semicolon'                           : 'Středník',
            'Space'                               : 'Mezera',
            'Tab'                                 : 'Tabulátor',
            'Detect unescaped quotes'             : 'Rozpoznat neescapované uvozovky',
            'Skip first line'                     : 'Přeskočit první řádek',
            'Interpolate missing fields'          : 'Odhadnout chybějící pole',
            'CSV Field Mapping'                   : 'Mapování CSV polí',
            'Preview Line'                        : 'Zvýraznit řádek',
            'Line {line}'                         : 'Řádek {line}',
            'Ignore'                              : 'Ignorovat',
            'Changed'                             : 'Změněno',
            'Modified'                            : 'Upraveno',
            'Edited'                              : 'Upraveno dne',
            'Created'                             : 'Vytvořeno dne',
            'Folder'                              : 'Složka',
            'Revision'                            : 'Verze',
            'Url'                                 : 'URL',
            'Parent'                              : 'Rodič',
            'Run Import'                          : 'Spustit import',
            'Import'                              : 'Importovat',
            'Parsing input file'                  : 'Probíhá zpracování vstupního souboru',
            'Analyzing tags'                      : 'Analyzuji tagy',
            'Analyzing folders'                   : 'Analyzuji složky',
            'Reading tags'                        : 'Čtení tagů',
            'Importing tags'                      : 'Import tagů',
            'Reading folders'                     : 'Čtení složek',
            'Importing folders'                   : 'Import složek',
            'Reading passwords'                   : 'Čtení hesel',
            'Importing passwords'                 : 'Import hesel',
            'Import failed'                       : 'Import selhal',
            'Import partially failed'             : 'Import částečně selhal',
            'Import successful'                   : 'Import proběhl úspěšně',
            'Import error'                        : 'Během importu došlo k chybě',
            'Invalid file type "{type}"'          : 'Neplatný typ souboru "{type}"',
            'Password required'                   : 'Je vyžadováno heslo',
            'Password invalid'                    : 'Neplatné heslo',
            'Failed to decrypt passwords'         : 'Nelze dešifrovat hesla',
            'Failed to decrypt folders'           : 'Nelze dešifrovat složky',
            'Failed to decrypt tags'              : 'Nelze dešifrovat tagy',
            'CSV file can not be mapped'          : 'Mapování CSV souboru selhalo',
            'Delete All Items'                    : 'Smazat všechny položky',
            'Restore All Items'                   : 'Obnovit všechno položky',
            'Restore Items'                       : 'Obnovit položky',
            'Restore all items in trash?'         : 'Obnovit všechny položky koše?',
            'Restore this item'                   : 'Obnovit tuto položku',
            'Items restored'                      : 'Položky obnoveny',
            'Empty Trash'                         : 'Vysypat koš',
            'Delete all items in trash?'          : 'Opravdu chcete všechny položky trvale odstranit?',
            'Trash emptied'                       : 'Koš vyprázdněn',
            'Search'                              : 'Hledat',
            'Use the search box to search'        : 'Využijte políčka pro hledání',
            'Search everywhere for "{query}"'     : 'Hledat všude "{query}"',
            'Settings'                            : 'Nastavení',
            'Password Rules'                      : 'Pravidla hesel',
            'Mark duplicates'                     : 'Mark duplikuje',
            'Maximum age in days'                 : 'Maximální věk v dnech',
            'Password Generator'                  : 'Generátor hesel',
            'Password strength'                   : 'Síla hesla',
            'Include numbers'                     : 'Použít číslice',
            'Include special characters'          : 'Použít speciální znaky',
            'User Interface'                      : 'Uživatelské rozhraní',
            'Initial section'                     : 'Úvodní stránka',
            'All Passwords'                       : 'Všechna hesla',
            'Passwords List View'                 : 'Zobrazení seznamu hesel',
            'Set title from'                      : 'Pole pro název',
            'Sort by'                             : 'Seřadit dle',
            'Title field'                         : 'Název pole',
            'Single click action'                 : 'Akce při jednoduchém kliknutí',
            'Double click action'                 : 'Akce při dvojkliku',
            'Copy password'                       : 'Kopírovat heslo',
            'Copy username'                       : 'Kopírovat uživatelské jméno',
            'Copy website'                        : 'Kopírovat adresu webu',
            'Show details'                        : 'Ukázat podrobnosti',
            'Add copy options in menu'            : 'Zobrazovat tlačítko kopírovat v kontextové nabídce',
            'Show username in list view'          : 'Zobrazovat uživatelské jméno v seznamu hesel',
            'Show tags in list view'              : 'Zobrazovat tagy v seznamu hesel',
            'Show hidden custom fields'           : 'Zobrazovat vlastní skrytá pole',
            'Search as i type'                    : 'Hledat, když píšu',
            'Search everywhere with Enter'        : 'Vyhledat všude pomocí klávesy Enter',
            'Always show search section'          : 'Vždy zobrazte sekci vyhledávání',
            'Notifications'                       : 'Upozornění',
            'Send Emails for'                     : 'Poslat Email v případě',
            'Security issues'                     : 'Problémy s bezpečností',
            'Passwords shared with me'            : 'Sdílení hesla s Vámi',
            'Show Notifications for'              : 'Zobrazovat upozornění pro',
            'Other errors'                        : 'Chyby',
            'Danger Zone'                         : 'Nebezpečná zóna',
            'Reset all settings'                  : 'Resetovat všechna nastavení',
            'Reset'                               : 'Resetovat',
            'Delete everything'                   : 'Smazat veškerá data',
            'DELETE EVERYTHING'                   : 'SMAZAT VŠE',
            'Account reset requested'             : 'Reset účtu',
            'View'                                : 'Zobrazení',
            'Advanced'                            : 'Pokročilé',
            'There is nothing here'               : 'Tady nic není...',
            'Click on "+" to add something'       : 'Stiskněte "+" pro přidání nové položky',
            'Deleted items will appear here'      : 'Smazané položky se zobrazí zde',
            'No passwords were shared with you'   : 'Nejsou s Vámi sdílena žádná hesla',
            'You did not share any passwords'     : 'Nesdílíte žádné heslo',
            'Your favorites will appear here'     : 'Oblíbené položky se objeví zde',
            'Better check the other sections'     : 'Zkuste prozkoumat další sekce',
            'That\'s probably a good sign'        : 'Tohle je pravděpodobně dobré znamení',
            'Go to {href}'                        : 'Jít na {href}',
            'Figure {count}: {title}'             : 'Obrázek {count}: {title}',
            'Unable to fetch page: {message}.'    : 'Nepodařilo se načíst stránku: {message}.',
            'Not Found'                           : 'Nenalezeno',
            'Tell us!'                            : 'Dejte nám vědět!',
            'Network error'                       : 'Síťová chyba',
            'Unable to load {module}'             : 'Nepodařilo se načíst modul: {module}',
            'Sort by name'                        : 'Seřadit dle jména',
            'Sort by modified date'               : 'Seřadit dle data úpravy',
            '{passwords} passwords'               : '{passwords} hesel',
            '1 password'                          : '1 Heslo',
            '{folders} folders'                   : '{folders} složek',
            '1 folder'                            : '1 Složka',
            '{tags} tags'                         : '{tags} tagů',
            '1 tag'                               : '1 Tag',
            ' and '                               : ' a',
            'match'                               : 'shoduje se s',
            'matches'                             : 'odpovídá',
            'true'                                : 'pravda',
            'false'                               : 'nepravda',
            'yes'                                 : 'ano',
            'no'                                  : 'ne'
        },
        helpTexts    = {
            'Mark passwords as weak if they are being used for multiple accounts'        : 'Označte hesla jako slabá, pokud jsou používána pro více účtů',
            'Mark passwords as weak if they surpass the specified amount of days'        : 'Označte heslo jako slabá, pokud překročí stanovenou dobu',
            'A higher strength results in longer, more complex passwords'                : 'Silnější hesla jsou delší a komplexnější',
            'Show the selected property as title in the list view'                       : 'Zobrazovat vybranou vlastnost v seznamu',
            'Sorts passwords by the selected property when sorting by name is selected'  : 'Seřadit hesla dle vybraného atributu při řazení dle názvu',
            'Action to perform when clicking on a password in the list view'             : 'Akce provedená při klepnutí na heslo v seznamu',
            'Action to perform when double clicking on a password in the list view'      : 'Akce provedená při dvojitém klepnutí na heslo v seznamu',
            'Shows options to copy the password and user name in the menu'               : 'V menu zobrazí možnost zkopírovat heslo a uživatelské jméno.',
            'The initial section to be shown when the app is opened'                     : 'Výchozí stránka po spuštění aplikace',
            'Always show the username related to the password in the list view'          : 'Zobrazí uživatelské jméno ke každému heslu v seznamu',
            'Show the tags for each password in the list view. Increases loading times'  : 'Zobrazí přidružené tagy pro každé heslo v seznamu. Prodlouží se tím však doba načítaní',
            'Show hidden custom fields in the edit form and detail section of a password': 'Zobrazí vlastní skrytá pole ve formuláři pro úpravy a v detailním náhledu',
            'Sends you e-mails about compromised passwords and other security issues'    : 'V případě bezpečnostních problémů obdržíte email',
            'Sends you e-mails when other people share passwords with you'               : 'Obdržíte email když s Vámi někdo nasdílí heslo',
            'Always show the section for global search in the navigation'                : 'V navigaci zobrazte vždy sekci pro globální vyhledávání',
            'Notifies you about compromised passwords and other security issues'         : 'Budete upozorněni na bezpečnostní problémy a kompromitovaná hesla',
            'Notifies you when other people share passwords with you'                    : 'Budete upozorněni když s Vámi někdo nasdílí heslo',
            'Notifies you when a background operation fails'                             : 'Budete upozorněni v případě selhání úlohy běžící na pozadí',
            'Reset all settings on this page to their defaults'                          : 'Všechna nastavení viditelné na této stránce budou uvedeny do výchozího stavu',
            'This will reset all settings to their defaults. Do you want to continue?'   : 'Tato akce resetuje veškerá nastavení. Přejete si pokračovat?',
            'Start over and delete all configuration, passwords, folders and tags'       : 'Začít znovu a smazat všechna nastavení, hesla, složky a tagy',
            'You have reached the maximum length of 4096 characters'                     : 'Dosáhli jste maximální počtu 4094 znaků',
            'Invalid trailing quote in quoted field'                                     : 'Neplatné zakončení pole',
            'We could not find anything for "{query}"'                                   : 'Nebyly nalezeny žádné výsledky pro dotaz "{query}"',
            'The file could not be parsed: {errors}'                                     : 'Soubor nelze pracovat: {errors}',
            'You have to wait {seconds} seconds before you can reset your account.'      : 'Vyčkejte {seconds} vteřin, než budete moci resetovat Váš účet.',
            'The page "{page}" could not be fetched from the handbook server.'           : 'Stránku "{page}" se nepodařilo načíst ze serveru s nápovědou.',
            'Some data is waiting to be synchronized'                                    : 'Některá data čekají na synchronizaci',
            '{message} in line {line} character {character}.'                            : '{message} na řádku {line}, znak {character}.'
        },
        longTexts    = {
            'The file has the type "{actual}" but "{expected}" is expected. You might have chosen the wrong file or importer.' : 'Typ souboru je "{actual}", ale očekává se "{expected}". Pravděpodobně jste vybrali špatný soubor nebo typ importu.',
            'Do you want to delete all your settings, passwords, folders and tags?\nIt will NOT be possible to undo this.'     : 'Přejete si odstranit všechny Vaše nastavení, hesla, složky a tagy?\nTUTO AKCI NELZE VRÁTIT.',
            '{service} is known to to generate faulty export files. Consult the manual for help if the file can not be parsed.': '{service} často chybně exportuje data. V případě selhání při zpracování souboru se podívejte do manuálu.'
        };

    OC.L10N.register(
        'passwords',
        Object.assign(translations, helpTexts, longTexts),
        'nplurals=2; plural=(n != 1);'
    );
}());