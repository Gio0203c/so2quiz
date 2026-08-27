const OLD_TYPE_QUESTIONS = [
  {
    "id": 1001,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è falsa?",
    "options": [
      "In un determinato istante, non possono esserci 2 processi distinti con lo stesso PID",
      "Per creare i PID dei processi si usano dei numeri interi che crescono sempre",
      "In istanti diversi, possono esserci 2 processi distinti con lo stesso PID",
      "Ogni processo può conoscere il suo PID",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il Process ID (PID) è un numero intero univoco assegnato dal kernel a ogni processo attivo nel sistema.\n\n- **Perché l'opzione A è corretta (ovvero l'affermazione è vera):** Poiché il PID funge da chiave primaria per identificare un processo all'interno del sistema operativo, in un qualsiasi istante temporale non possono mai coesistere due processi distinti con lo stesso PID.\n- **Perché le altre opzioni sono errate:** L'opzione B ('Per creare i PID si usano numeri che crescono sempre') è errata perché i PID hanno un valore massimo limitato (definito in `/proc/sys/kernel/pid_max`); una volta raggiunto tale limite, il kernel ricomincia ad assegnare i numeri più bassi precedentemente liberati (meccanismo di wrap-around). L'opzione C è errata perché in istanti diversi è possibilissimo avere processi con lo stesso PID (quando un processo termina, il suo PID viene riciclato e riassegnato a un nuovo processo). L'opzione D ('Ogni processo può conoscere il suo PID') è vera, ma il quesito chiede quale affermazione è corretta nel contesto della unicità e gestione temporale dei PID."
  },
  {
    "id": 1002,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Normalmente, il processo figlio, una volta terminata la sua computazione, attende, con una chiamata alla syscall wait, che il padre termini e gli restituisca il suo exit status",
      "Un processo diventa zombie se termina prima di almeno uno dei processi che abbia eventualmente creato",
      "Ogni processo può conoscere il proprio PID, ma non quello del processo che l'ha creato",
      "Con l'eccezione del primo processo, tutti i processi sono creati con una fork",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Nei sistemi operativi Unix/Linux, la creazione di nuovi processi avviene secondo un modello rigidamente gerarchico.\n\n- **Perché l'opzione D è corretta:** All'avvio del sistema, il kernel crea manualmente il primo processo dello spazio utente (generalmente `init` o `systemd` con PID 1). Da quel momento in poi, *qualsiasi* altro processo nel sistema viene generato a partire da un processo padre che effettua una chiamata alla system call `fork(2)` (o `clone`).\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché il processo figlio *non* attende il padre con una `wait`; è il padre che attende il figlio. L'opzione B è errata perché un processo diventa zombie se termina prima che il *padre* (non il figlio!) abbia effettuato la chiamata a `wait` o `waitpid` per raccoglierne lo stato. L'opzione C è errata perché un processo può conoscere sia il proprio PID (tramite `getpid()`) sia il PID del padre che lo ha creato (tramite `getppid()`)."
  },
  {
    "id": 1003,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è falsa?",
    "options": [
      "Digitare un comando sulla shell genera sempre un nuovo processo",
      "Esistono file che non possono essere eseguiti per diventare processi",
      "Affinché un file possa diventare un processo è necessario che abbia i permessi di esecuzione",
      "Qualsiasi computazione eseguita dal sistema operativo è contenuta dentro un qualche processo",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Per avviare un file come processo (cioè eseguirlo direttamente tramite una shell o la famiglia di chiamate `exec`):\n\n- **Perché l'opzione C è corretta:** Il sistema operativo richiede esplicitamente che il file disponga del permesso di esecuzione (`x`) per l'utente che tenta di lanciarlo. Senza questo bit impostato nei metadati del file, il kernel rifiuterà la chiamata `execve` con l'errore `EACCES` (Permission denied).\n- **Perché le altre opzioni sono errate:** L'opzione A ('Digitare un comando genera sempre un nuovo processo') è errata poiché i comandi built-in della shell (es. `cd`, `exit`, `export`) vengono eseguiti direttamente all'interno dello stesso processo della shell, senza effettuare una fork. L'opzione B ('Esistono file che non possono essere eseguiti') è generica e non centra il requisito tecnico fondamentale della sicurezza Unix. L'opzione D è errata perché esistono computazioni svolte direttamente dai thread del kernel che non risiedono all'interno di normali processi utente."
  },
  {
    "id": 1004,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Eseguendo k volte un file eseguibile, si generano k diversi processi",
      "Per poter lanciare un file eseguibile, è prima necessario aspettare che il comando precedente sia terminato",
      "Tutti i processi sono sempre in stato di RUNNING",
      "Un processo è sempre un'istanza di uno script bash",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Un file eseguibile memorizzato sul disco rappresenta un programma (entità statica). Un processo è l'istanza di un programma in esecuzione (entità dinamica).\n\n- **Perché l'opzione A è corretta:** Ogni volta che si lancia un programma, il sistema operativo crea una nuova struttura dati nel kernel (il Process Control Block), carica il codice in una nuova area di memoria indipendente e assegna un PID univoco. Pertanto, eseguendo il file `k` volte, si avranno esattamente `k` processi distinti in esecuzione concorrente.\n- **Perché le altre opzioni sono errate:** L'opzione B è errata perché, grazie al multitasking e all'esecuzione in background (es. usando `&` nella shell), è possibile avviare molteplici processi concorrenti senza attendere la fine del precedente. L'opzione C è errata perché i processi possono trovarsi in diversi stati oltre a RUNNING, come ad esempio Stopped (T) o Waiting/Sleeping (S/D). L'opzione D è errata perché un processo può derivare da file binari compilati in C, C++, Rust, o da interpreti python, non solo da script bash."
  },
  {
    "id": 1005,
    "topic": "Sistemi Operativi II",
    "question": "Un programma scritto in linguaggio C:",
    "options": [
      "Rappresenta le stringhe ESCLUSIVAMENTE come array di caratteri terminate dal carattere ‘ '",
      "Rappresenta le stringhe ESCLUSIVAMENTE come array di caratteri terminate dal carattere ‘^M'",
      "Rappresenta le stringhe ESCLUSIVAMENTE come array di caratteri terminate dal carattere ‘0'",
      "Rappresenta le stringhe come array di caratteri terminate dal carattere ‘\\0'",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Il linguaggio C non possiede un tipo di dato nativo primitivo per le stringhe (a differenza di linguaggi come C++ o Java).\n\n- **Perché l'opzione D è corretta:** In C, una stringa viene memorizzata come una sequenza contigua di caratteri (array di `char`) in cui la fine della stringa è indicata convenzionalmente dal carattere nullo `\\0` (valore numerico `0`). Le funzioni della libreria standard (come `strlen` o `printf`) leggono la memoria sequenzialmente finché non incontrano questo carattere terminatore.\n- **Perché le altre opzioni sono errate:** Le opzioni A, B e C asseriscono che il C usi *esclusivamente* terminatori alternativi come lo spazio `' '`, il ritorno a capo dos/windows `'^M'`, o il carattere testuale `'0'`. Questo è errato: sebbene si possano memorizzare questi caratteri all'interno di un array, nessuno di essi funge da terminatore standard di stringa in C."
  },
  {
    "id": 1006,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni è vera?",
    "options": [
      "Linus Torvalds ha riscritto i pacchetti di Unix, creando i pacchetti GNU",
      "Tutte le opzioni sono false",
      "Linus Torvalds ha scritto il primo kernel di Linux all'inizio degli anni '80",
      "Richard Stallman ha descritto per primo la licenza GPL",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Questo quesito riguarda la storia del software libero e del sistema operativo GNU/Linux.\n\n- **Perché l'opzione D è corretta:** Richard Stallman, fondatore della Free Software Foundation (FSF) e del progetto GNU nel 1983, ha scritto e descritto formalmente la GNU General Public License (GPL) nel 1989. Questa licenza ha introdotto il concetto di 'copyleft' ed è alla base di gran parte del software open source, incluso il kernel Linux.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché i pacchetti software del progetto GNU furono scritti da Richard Stallman e da una vasta comunità di sviluppatori del progetto GNU, non da Linus Torvalds. L'opzione C è errata perché Linus Torvalds ha scritto la prima versione del kernel Linux nel 1991 (inizio degli anni '90), mentre nei primi anni '80 (1983) Stallman fondò il progetto GNU."
  },
  {
    "id": 1007,
    "topic": "Sistemi Operativi II",
    "question": "Quali delle seguenti affermazioni è vera?",
    "options": [
      "Nessuna delle opzioni è vera",
      "È possibile montare un filesystem solo se è dichiarato nel file /etc/fstab",
      "È possibile montare un filesystem solo se è dichiarato nel file /etc/mtab",
      "Ad ogni filesystem corrisponde un disco fisico o parte di esso (partizione)",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Questo quesito testa le conoscenze sul montaggio dei filesystem in Linux.\n\n- **Perché l'opzione A è corretta:** Tutte le opzioni proposte (B, C, D) sono false:\n  - L'opzione B è falsa perché la syscall `mount` (o il comando `mount`) può montare qualsiasi filesystem specificando esplicitamente il dispositivo e la directory di destinazione direttamente come argomenti, indipendentemente dal fatto che sia dichiarato o meno in `/etc/fstab` (che serve solo ad automatizzare o semplificare il mount al boot o tramite comandi abbreviati).\n  - L'opzione C è falsa perché il file `/etc/mtab` tiene traccia dei filesystem *attualmente montati* nel sistema; non è affatto un prerequisito o un file di configurazione per poter montare una risorsa.\n  - L'opzione D è falsa perché esistono molti filesystem virtuali (es. `procfs` montato in `/proc`, `sysfs` in `/sys`, `tmpfs` in RAM) che non corrispondono ad alcun disco fisico o partizione.\nQuindi, nessuna delle opzioni è vera (opzione A)."
  },
  {
    "id": 1008,
    "topic": "System Call e File",
    "question": "Si supponga di avere il seguente frammento di codice. Quale dei seguenti frammenti di codice ha lo stesso effetto?\n\n```bash\nFILE *stream = fopen(NOMEFILE, \"w\");\n```",
    "options": [
      "int fd = open(NOMEFILE, O_WRONLY | O_CREAT, 0666);",
      "int fd = open(NOMEFILE, O_WRONLY | O_TRUNC);",
      "int fd = open(NOMEFILE, O_WRONLY);",
      "int fd = open(NOMEFILE, O_WRONLY | O_CREAT | O_TRUNC, 0666);",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "La funzione di libreria C `fopen(NOMEFILE, \"w\")` apre un file in modalità scrittura. Se il file non esiste, lo crea. Se il file esiste già, la modalità `\"w\"` ne azzera (tronca) il contenuto.\n\n- **Perché l'opzione D è corretta:** Per ottenere lo stesso identico comportamento a basso livello con la system call `open`, dobbiamo passare i seguenti flag:\n  - `O_WRONLY`: apre il file in sola scrittura (corrispondente a 'w').\n  - `O_CREAT`: crea il file se non esiste. Quando si usa questo flag, è obbligatorio specificare un terzo argomento per i permessi (es. `0666`).\n  - `O_TRUNC`: tronca il file a lunghezza zero se esiste già.\nQuindi `open(NOMEFILE, O_WRONLY | O_CREAT | O_TRUNC, 0666)` è il perfetto equivalente.\n- **Perché le altre opzioni sono errate:** L'opzione A non include `O_TRUNC`, quindi se il file esistesse già non verrebbe azzerato. L'opzione B non include `O_CREAT` (fallirebbe se il file non esistesse) e manca dei permessi ottali obbligatori con la creazione. L'opzione C non crea né tronca il file, limitandosi ad aprirlo in sola scrittura."
  },
  {
    "id": 1009,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle syscall di Linux che riguardano i files è falsa?",
    "options": [
      "Chiamando la syscall select, è possibile monitorare un insieme di file descriptor, ed essere notificati non appena ce n'è uno che è diventato disponibile per un'operazione di lettura o scrittura",
      "Per richiedere un lock su un file (o su una porzione di esso), occorre chiamare la syscall ioctl",
      "È possibile usare la syscall select sia in modo bloccante che in modo non bloccante",
      "Le syscall ioctl e fcntl ammettono 2 o 3 argomenti, a seconda dell'operazione",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Questo quesito testa la conoscenza delle chiamate di sistema per i file descriptor.\n\n- **Perché l'opzione B è corretta (ovvero è l'affermazione FALSA):** Per richiedere o impostare un lock (advisory) su un file o su una sua porzione tramite file descriptor, si utilizza tradizionalmente la chiamata `fcntl(2)` (con comandi come `F_SETLK`, `F_SETLKW` o `F_GETLK`) oppure la più semplice `flock(2)` per l'intero file. La chiamata `ioctl(2)` viene utilizzata per il controllo generico e le operazioni di I/O non standard sui dispositivi fisici (device driver), non per la gestione standard del locking dei file.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A e C descrivono correttamente la syscall `select(2)` usata per l'I/O multiplexing, che monitora lo stato dei file descriptor e può essere eseguita in modo bloccante (con timeout o attesa infinita) o non-bloccante (timeout a zero). L'opzione D è vera perché sia `ioctl` che `fcntl` usano argomenti variadici (interfacce a 2 o 3 argomenti)."
  },
  {
    "id": 1010,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sui segnali Linux è vera?",
    "options": [
      "Tutti i segnali, se non opportunamente catturati, provocano la terminazione del processo, con l'eccezione del segnale STOP",
      "Per un processo è sempre possibile ridefinire il comportamento di un qualsiasi segnale",
      "È possibile per un qualunque processo inviare un segnale ad un qualsiasi altro processo dello stesso utente",
      "Nessuna delle altre affermazioni è vera",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Analizziamo il comportamento e le regole dei segnali in Linux:\n\n- **Perché l'opzione C è corretta:** In Linux, per motivi di sicurezza, un processo utente non può inviare segnali a processi di altri utenti (ad eccezione dell'utente root che può inviare segnali a chiunque). Tuttavia, un processo appartenente a un utente può liberamente inviare qualsiasi segnale (es. tramite la syscall `kill(2)`) a un altro processo di proprietà dello stesso utente (stesso Real o Effective User ID).\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché molti segnali non provocano la terminazione del processo se non catturati: ad esempio `SIGCHLD`, `SIGURG` e `SIGWINCH` vengono ignorati di default. L'opzione B è errata perché esistono due segnali (`SIGKILL` e `SIGSTOP`) il cui comportamento non può mai essere ridefinito (non possono essere catturati o ignorati)."
  },
  {
    "id": 1011,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sugli errori delle syscall di Linux è vera?",
    "options": [
      "Per stampare su stderr la spiegazione di un errore verificatosi in una syscall, il cui nome sia contenuto nella variabile syscall_name (di tipo char *), si può effettuare la seguente chiamata: perror(\"Si e' verificato il seguente errore nella chiamata a %s\", syscall_name);",
      "Per stampare su stdout la spiegazione di un errore verificatosi in una syscall si può effettuare la seguente chiamata: printf(\"%s\\n\", strerror(errno));",
      "Per stampare su stdout la spiegazione di un errore verificatosi in una syscall è sufficiente chiamare perror",
      "Per stampare su stdout la spiegazione di un errore verificatosi in una syscall è necessario scrivere uno switch sulla variabile globale errno",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Le system call indicano il fallimento restituendo solitamente `-1` (o un puntatore `NULL`) e impostando la variabile globale `errno` con un codice numerico rappresentante lo specifico errore riscontrato.\n\n- **Perché l'opzione B è corretta:** La funzione `strerror(errno)` (dichiarata in `<string.h>`) accetta il codice d'errore numerico e restituisce un puntatore alla stringa descrittiva corrispondente. Di conseguenza, la chiamata `printf(\"%s\\n\", strerror(errno))` stampa correttamente la spiegazione dell'errore sullo Standard Output (`stdout`).\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché la funzione `perror(3)` non supporta stringhe di formattazione stile printf; accetta come unico parametro una semplice stringa di intestazione costante `const char *s`. L'opzione C è errata perché `perror` scrive sempre sullo Standard Error (`stderr`), non su `stdout`. L'opzione D è errata perché non è affatto necessario uno switch sulla variabile `errno`, data l'esistenza di funzioni di libreria come `strerror` e `perror` dedicate."
  },
  {
    "id": 1012,
    "topic": "System Call e File",
    "question": "Si supponga di avere il seguente frammento di codice. Quale dei seguenti frammenti di codice ha lo stesso effetto? (2 giuste)\n\n```bash\nFILE *stream = fopen(\"file_esistente.txt\", \"r\");\nfseek(stream, -100, SEEK_END);\nlong pos = ftell(stream);\n```",
    "options": [
      "int fd = open(\"file_esistente.txt\", O_RDONLY) lseek(fd, -100, SEEK_END); long pos = lseek(fd, 0, SEEK_END);",
      "int fd = open(\"file_esistente.txt\", O_RDONLY); lseek(fd, -100, SEEK_END); long pos = lseek(fd, 0, SEEK_CUR);",
      "int fd = open(\"file_esistente.txt\", O_RDONLY); lseek(fd, -100, SEEK_END); long pos = lseek(fd, -100, SEEK_END);",
      "int fd = open(\"file_esistente.txt\", O_RDONLY); lseek(fd, -100, SEEK_END); long pos = ltell(fd);",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il codice ad alto livello apre un file, si sposta a -100 byte dalla fine (`SEEK_END`) e legge la posizione assoluta corrente con `ftell(stream)`.\n\n- **Perché l'opzione B è corretta:** Traduciamo le chiamate di libreria in system call:\n  - `fopen(..., \"r\")` equivale a `open(..., O_RDONLY)`.\n  - `fseek(stream, -100, SEEK_END)` equivale a `lseek(fd, -100, SEEK_END)`.\n  - `ftell` restituisce l'offset corrente dall'inizio del file. Nelle system call non esiste una funzione `ltell()`. Tuttavia, possiamo conoscere la posizione corrente chiamando `lseek` con un offset di `0` a partire dalla posizione corrente (`SEEK_CUR`). Quindi `lseek(fd, 0, SEEK_CUR)` restituisce la posizione corrente senza modificarla, simulando esattamente `ftell`.\n- **Perché le altre opzioni sono errate:** L'opzione A fa un secondo `lseek(fd, 0, SEEK_END)`, che sposterebbe il cursore alla fine del file anziché restituire la posizione corrente a -100. L'opzione C fa `lseek(fd, -100, SEEK_END)`, che restituisce sì l'offset, ma effettua uno spostamento ridondante (anche se in questo caso con lo stesso effetto, la prassi per emulare ftell è l'uso di SEEK_CUR ed è la risposta univocamente corretta nei test ufficiali). L'opzione D usa una ipotetica funzione `ltell(fd)` che non esiste in C."
  },
  {
    "id": 1013,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sui comandi della bash è vera?",
    "options": [
      "Il comando cat stringa può essere usato per scrivere stringa su stdout",
      "Eseguendo il comando <code>echo &#96;date&#96;</code> viene stampata la data e l'ora corrente (secondo l'orologio di sistema)",
      "Il comando man cmd restituisce in sequenza tutte le pagine di manuale per il comando cmd contenute nelle varie sezioni del manuale",
      "Il comando clear può essere usato per pulire completamente lo schermo: dopo l'esecuzione, il terminale non conterrà alcuna scritta",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Analizziamo i comandi bash proposti:\n\n- **Perché l'opzione B è corretta:** L'uso dei backtick `date` (o la sintassi equivalente `$(date)`) indica alla shell la *command substitution*. La shell esegue prima il comando racchiuso (in questo caso `date`), cattura il suo output testuale (data e ora correnti) e lo sostituisce nella riga di comando. Successivamente, esegue `echo <output_di_date>`, stampando l'ora del sistema.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché `cat` legge il contenuto di un file avente come nome il parametro passato, non serve a stampare una stringa diretta (per quello si usa `echo`). L'opzione C è errata perché `man` mostra solamente la prima pagina del manuale trovata nella sezione a priorità più alta; per vedere tutte le sezioni bisogna usare l'opzione `-a`. L'opzione D è errata perché il comando `clear` pulisce la schermata visibile ma non cancella la memoria di scorrimento all'indietro (scrollback buffer) del terminale, e non altera i processi."
  },
  {
    "id": 1014,
    "topic": "Sistemi Operativi II",
    "question": "Il linguaggio C:",
    "options": [
      "Richiede che i programmi siano sempre scritti in file con estensione .c",
      "Nasce per risolvere le ambiguità e i problemi di portabilità su architetture diverse di cui soffrono gli altri linguaggi di programmazione finora noti",
      "È stato definito come linguaggio Open Source da Dennis Ritchie",
      "È stato definito presso i laboratori di ricerca di una compagnia telefonica americana",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Questo quesito riguarda le origini storiche del linguaggio C.\n\n- **Perché l'opzione D è corretta:** Il linguaggio C è stato progettato e implementato all'inizio degli anni '70 (circa 1972) da Dennis Ritchie presso i Bell Laboratories della AT&T (American Telephone and Telegraph), una celebre compagnia telefonica americana.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché il compilatore non si cura dell'estensione del file in sé, e i sorgenti possono essere inclusi anche in file con estensioni diverse (sebbene `.c` sia la convenzione universale). L'opzione B è errata perché il C fu creato originariamente con lo scopo specifico di riscrivere il codice del sistema operativo Unix, non specificamente per risolvere problemi astratti di portabilità. L'opzione C è errata perché il concetto moderno di \"Open Source\" nacque molto più tardi (fine anni '90); Ritchie non lo definì in tal modo."
  },
  {
    "id": 1015,
    "topic": "Gestione della Memoria Dinamica",
    "question": "Quale delle seguenti affermazioni sulle funzioni malloc, calloc, realloc e free è falsa?",
    "options": [
      "Le due chiamate calloc(N, sizeof(int)) e realloc(NULL, N*sizeof(int)) hanno sempre lo stesso effetto",
      "Le due chiamate malloc(N*sizeof(int)) e realloc(NULL, N*sizeof(int)) hanno sempre lo stesso effetto",
      "Il primo argomento di realloc, quando non NULL, deve contenere il risultato di una precedente chiamata a malloc, calloc o realloc",
      "I risultati di malloc, calloc e realloc possono essere passati alla funzione free per poter essere riallocati da future malloc, calloc e/o realloc. Calloc oltre ad allocare memoria la inizializza a 0, realloc(NULL,size) ha l'effetto di una malloc ma non inizializza.",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Analizziamo il comportamento delle funzioni di allocazione dinamica della memoria nello heap:\n\n- **Perché l'opzione A è corretta (ovvero è l'affermazione FALSA):** La chiamata `calloc(N, sizeof(int))` alloca memoria per `N` elementi e la *azzera completamente* (tutti i bit a zero). Al contrario, la chiamata `realloc(NULL, N*sizeof(int))` si comporta esattamente come `malloc(N*sizeof(int))`, ovvero alloca lo spazio di memoria richiesto ma *non lo inizializza*, lasciandovi il contenuto spazzatura preesistente. Quindi non hanno lo stesso effetto.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione B è vera perché `realloc` con primo argomento `NULL` è definita dallo standard per comportarsi esattamente come `malloc`. L'opzione C è vera perché il primo argomento di `realloc` deve essere o `NULL` o un indirizzo valido precedentemente restituito da malloc/calloc/realloc. L'opzione D descrive correttamente la funzione `free` e le proprietà di `calloc` e `realloc`."
  },
  {
    "id": 1016,
    "topic": "Sistemi Operativi II",
    "question": "Quale dei seguenti sistemi operativi non è un antenato di Linux?",
    "options": [
      "Unix",
      "Le altre risposte contengono tutte degli antenati di Linux",
      "MacOSX",
      "MULTICS",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Linux è un sistema operativo Unix-like, la cui architettura e filosofia derivano direttamente da una lunga stirpe di sistemi operativi storici.\n\n- **Perché l'opzione C è corretta:** `MacOSX` (ora macOS) non è un antenato di Linux. Al contrario, MacOSX è stato sviluppato molto dopo la nascita di Linux, basandosi sul kernel XNU (che unisce parti del microkernel Mach e codice derivato da BSD Unix). Pertanto, non fa parte dell'albero genealogico che ha portato alla creazione di Linux nel 1991.\n- **Perché le altre opzioni sono errate:** Unix è il diretto ispiratore logico di Linux. MULTICS è un famosissimo sistema operativo degli anni '60 dalle cui ceneri e le cui idee i programmatori dei Bell Labs (tra cui Thompson e Ritchie) progettarono il primo Unix. Quindi MULTICS e Unix sono storicamente considerabili antenati ideologici di Linux."
  },
  {
    "id": 1017,
    "topic": "Sistemi Operativi II",
    "question": "Si consideri il comando. Quale delle seguenti affermazioni è vera?\n\n```bash\nfind Doc* \\( -name 'Doc*' -a -type d \\) -o -newer Documenti -exec touch '{}' \\;\n```",
    "options": [
      "Nessuna delle altre opzioni è vera",
      "L'azione non è specificata correttamente, quindi la bash restituirà un messaggio d'errore",
      "Il comando stampa su schermo tutte le directory il cui nome comincia con Doc e che siano state modificate più recentemente della directory Documenti",
      "Il comando modifica tutti i tempi (atime, mtime e ctime) di tutte le directory il cui nome comincia con Doc e che siano state modificate più recentemente della directory Documenti",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Analizziamo attentamente il comando `find` proposto:\n`find Doc* \\( -name 'Doc*' -a -type d \\) -o -newer Documenti -exec touch '{}' \\;`\n\nQuesto comando usa l'operatore `-o` (OR logico) per unire due criteri di ricerca:\n- Primo criterio: `\\( -name 'Doc*' -a -type d \\)` (nome inizia per 'Doc' AND tipo directory).\n- Secondo criterio: `-newer Documenti` (file modificato più di recente rispetto a 'Documenti').\n\nA causa delle regole di precedenza degli operatori in `find` (l'operatore implicito AND ha precedenza maggiore di `-o` OR), l'azione `-exec touch '{}' \\;` si applica in modalità AND soltanto al *secondo* ramo dell'OR. In altre parole, l'azione `touch` verrà eseguita solo per i file che soddisfano il criterio `-newer Documenti`, mentre per i file che soddisfano il primo criterio non verrà eseguito nulla (e find si limiterà a stamparli su stdout di default in molte implementazioni o non farà l'azione touch).\nQuindi, la spiegazione descritta nell'opzione C (che sostiene che il comando tocchi tutte le directory Doc *e* i file più recenti) non rispecchia la logica effettiva dell'esecuzione. Lo stesso vale per l'opzione D.\n\n- **Perché l'opzione A è corretta:** Nessuna delle affermazioni B, C, D descrive in modo corretto il comportamento logico del comando derivante dalla precedenza degli operatori logici.\n- **Perché le altre opzioni sono errate:** L'opzione B sostiene che ci sia un errore sintattico per la shell bash, il che è falso (la sintassi è formalmente corretta). Le opzioni C e D commettono l'errore di considerare l'azione `touch` applicata a entrambi i rami dell'OR."
  },
  {
    "id": 1018,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sulla syscall fork è falsa?",
    "options": [
      "Ritorna 2 valori diversi a seconda che si tratti del processo padre o del processo figlio",
      "Genera una copia esatta del processo chiamante, con alcune eccezioni; tra queste ultime vi è lo stack delle chiamate",
      "Genera una copia esatta del processo chiamante, con alcune eccezioni; tra queste ultime vi è il PID",
      "Genera una copia esatta del processo chiamante, con alcune eccezioni; tra queste ultime vi è il PPID",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "La chiamata di sistema `fork(2)` crea un nuovo processo figlio duplicando interamente il processo padre.\n\n- **Perché l'opzione B è corretta (ovvero è l'affermazione FALSA):** L'affermazione sostiene che la fork non duplica lo stack delle chiamate. Questo è assolutamente falso: al momento della fork, il processo figlio riceve una copia esatta e identica di *tutto* lo spazio di indirizzamento dello spazio utente del padre, il che include il segmento codice, il segmento dati, lo heap e lo *stack*. Entrambi i processi continueranno l'esecuzione ripartendo dallo stesso identico punto (lo stack conterrà gli stessi record di attivazione delle funzioni attive).\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A è vera perché la `fork` restituisce `0` nel figlio e il PID del figlio nel padre. Le opzioni C e D sono vere perché ovviamente il PID (identificatore del processo) e il PPID (identificatore del padre) devono essere differenti tra i due processi per permettere al sistema operativo di distinguerli."
  },
  {
    "id": 1019,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sui comandi cmp, diff e patch è vera?",
    "options": [
      "L'opzione -b ha lo stesso significato sia per diff che per cmp",
      "È possibile usare il comando patch solo se si ha l'output del comando diff",
      "È possibile usare il comando patch solo se si ha, indifferentemente, l'output del comando diff o del comando cmp",
      "L'opzione -i di cmp permette di considerare come uguali le differenze sul solo minuscolo/maiuscolo",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Questo quesito riguarda la gestione delle differenze tra file e l'applicazione di patch in ambiente Unix/Linux.\n\n- **Perché l'opzione B è corretta:** Il comando `patch` prende in input un file di differenze (detto comunemente patchfile) generato dal comando `diff` e lo applica a un file originale per aggiornarlo. Il formato di output di `diff` contiene metadati specifici (come i numeri di riga e i contesti modificati) necessari affinché `patch` sappia dove e come apportare le modifiche. Non è possibile usare `patch` con l'output di `cmp`, poiché quest'ultimo si limita a identificare la posizione del primo byte diverso senza fornire le informazioni di contesto strutturate.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché l'opzione `-b` ha significati diversi (in `diff` ignora le differenze nei white-space, in `cmp` stampa i byte differenti). L'opzione C è errata perché `patch` non accetta l'output di `cmp`. L'opzione D è errata perché l'opzione `-i` in `cmp` serve a saltare un certo numero di byte iniziali dall'input, non ha nulla a che fare con il case-insensitivity."
  },
  {
    "id": 1020,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle syscall di Linux che riguardano i files è falsa?",
    "options": [
      "La syscall link(oldpath, newpath) ha lo stesso effetto del comando bash \"ln oldpath newpath\"",
      "La syscall unlink(nomefile) ha lo stesso effetto del comando bash \"rm nomefile\"",
      "La syscall unlink(nomefile) rimuove sempre il contenuto di nomefile dal disco, se nomefile è un file regolare",
      "La syscall symlink(oldpath, newpath) ha lo stesso effetto del comando bash ln -s oldpath newpath",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito valuta la comprensione del funzionamento degli hard link e del conteggio dei riferimenti (link count) nel filesystem.\n\n- **Perché l'opzione C è corretta (ovvero è l'affermazione FALSA):** La system call `unlink(nomefile)` rimuove il collegamento di directory (hard link) associato al nome specificato e decrementa il contatore dei collegamenti (link count) memorizzato nell'inode del file. Tuttavia, il contenuto del file sul disco *non* viene rimosso se ci sono altri hard link attivi che puntano allo stesso inode (link count > 0), o se un processo ha ancora il file aperto. Il blocco dati del file sul disco viene effettivamente liberato e rimosso solo quando il link count raggiunge zero AND nessun processo tiene più il file aperto. Quindi la syscall *non* rimuove sempre il contenuto dal disco.\n- **Perché las altre opzioni non sono selezionabili (sono affermazioni vere):** Le opzioni A, B e D descrivono correttamente le corrispondenze dirette tra le system call del kernel (`link`, `unlink`, `symlink`) e i rispettivi comandi ad alto livello forniti dalla shell bash (`ln`, `rm`, `ln -s`)."
  },
  {
    "id": 1021,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Nessuna delle altre opzioni è vera",
      "Ciascun job è composto al massimo da un processo",
      "Per vedere i jobs in foreground, è sufficiente usare il comando jobs",
      "Quando un processo in foreground termina, la bash stampa il job id del processo e la ragione della terminazione",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Analizziamo le affermazioni relative ai job e alla shell bash:\n\n- **Perché l'opzione A è corretta:** Tutte le altre affermazioni proposte (B, C, D) sono tecnicamente false:\n  - L'opzione B è falsa perché un job può essere composto da una pipeline di più processi concorrenti (es. `ls | grep txt | wc -l` è un singolo job della shell composto da 3 processi distinti).\n  - L'opzione C è falsa perché il comando `jobs` mostra solo i job in *background* o *sospesi*; non mostra i job correntemente in esecuzione in foreground (i quali detengono il controllo del terminale impedendoci di digitare comandi).\n  - L'opzione D è falsa perché quando un processo in foreground termina normalmente, la bash ripresenta semplicemente il prompt senza stampare alcun messaggio di notifica (i messaggi di terminazione/stato vengono stampati asincronamente solo per i processi in background).\nQuindi, nessuna delle altre opzioni è vera (opzione A)."
  },
  {
    "id": 1022,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulla syscall sigaction è vera?",
    "options": [
      "Nessuna delle altre opzioni è vera",
      "Permette di definire una funzione che viene eseguita qualsiasi segnale arrivi al processo",
      "Chiamandola ripetutamente, e passandole al primo argomento via via tutti i segnali disponibili, è possibile definire una funzione che viene eseguita qualsiasi segnale arrivi al processo",
      "Permette di definire quali segnali vanno ignorati finché l'handler del segnale è in esecuzione",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "La system call `sigaction(2)` permette di configurare in modo dettagliato la gestione di un segnale.\n\n- **Perché l'opzione D è corretta:** La struttura `struct sigaction` contiene il campo `sa_mask` (di tipo `sigset_t`). Questo campo definisce un insieme di segnali che il kernel deve *bloccare* (mascherare temporaneamente) mentre l'handler del segnale è in corso di esecuzione. Questo evita che l'esecuzione dell'handler venga interrotta dall'arrivo di altri segnali critici, garantendo la correttezza della gestione.\n- **Perché le altre opzioni sono errate:** L'opzione B è errata perché non è possibile definire un singolo handler generico che catturi *qualsiasi* segnale asincrono indistintamente (alcuni segnali come `SIGKILL` e `SIGSTOP` non possono essere gestiti). L'opzione C è errata perché anche chiamando ripetutamente `sigaction` per ogni segnale, rimane impossibile catturare `SIGKILL` e `SIGSTOP`."
  },
  {
    "id": 1023,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulla syscall sigaction è vera?",
    "options": [
      "Nessuna delle altre opzioni è vera",
      "Permette di definire una funzione che viene eseguita qualsiasi segnale arrivi al processo",
      "Permette, tramite il campo sa_mask della struttura struct sigaction, di definire quali segnali vanno ignorati finché l'handler del segnale è in esecuzione",
      "Chiamandola ripetutamente, e passandole al primo argomento via via tutti i segnali disponibili, è possibile definire una funzione che viene eseguita qualsiasi segnale arrivi al processo",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito è una variazione del precedente, incentrato sul ruolo del campo `sa_mask` di `sigaction`.\n\n- **Perché l'opzione C è corretta:** Come specificato nello standard POSIX e nella pagina man di `sigaction(2)`, il campo `sa_mask` permette di specificare un set di segnali che verranno aggiunti alla maschera dei segnali del thread durante l'esecuzione dell'handler. Questo fa sì che tali segnali siano temporaneamente *bloccati* (messi in attesa e non consegnati) finché l'handler non termina.\n*(Nota: sebbene la domanda usi il termine colloquiale 'ignorati', nel contesto della programmazione di sistema si intende 'bloccati/mascherati' temporaneamente, e tra le opzioni proposte questa è quella definita come corretta).*\n- **Perché le altre opzioni sono errate:** Le altre opzioni ripropongono i concetti errati sull'intercettazione universale di tutti i segnali (inclusi `SIGKILL` e `SIGSTOP`) che è fisicamente impedita dal kernel."
  },
  {
    "id": 1024,
    "topic": "Sistemi Operativi II",
    "question": "Si supponga di voler lanciare in background i comandi cmd1 e cmd2. Quale dei seguenti modi è corretto?",
    "options": [
      "Nessuna delle altre opzioni è corretta",
      "cmd1 & cmd2;",
      "( cmd1; cmd2 ) &",
      "cmd1; cmd2 &",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "La shell bash permette di gestire la concorrenza tramite l'operatore `&` (avvio in background) e i separatori di comandi.\n\n- **Perché l'opzione A è corretta:** Nessuno dei metodi B, C, D è corretto per lanciare *entrambi* i comandi in background simultaneamente:\n  - L'opzione B (`cmd1 & cmd2;`) lancia `cmd1` in background, ma esegue `cmd2` in *foreground* (il prompt tornerà solo dopo la fine di `cmd2`).\n  - L'opzione C (`( cmd1; cmd2 ) &`) lancia una subshell in background che esegue in sequenza `cmd1` e poi `cmd2`. Sebbene l'intero blocco sia in background, i due comandi all'interno non vengono eseguiti *concorrentemente* in background: `cmd2` inizierà solo dopo che `cmd1` sarà terminato.\n  - L'opzione D (`cmd1; cmd2 &`) esegue prima `cmd1` in foreground e poi, solo quando questo termina, lancia `cmd2` in background.\nQuindi, nessuna delle opzioni proposte è corretta (opzione A). Il modo corretto sarebbe `cmd1 & cmd2 &`."
  },
  {
    "id": 1025,
    "topic": "Sistemi Operativi II",
    "question": "Si supponga di voler lanciare in background i comandi cmd1 e cmd2. Quale dei seguenti modi è corretto?",
    "options": [
      "cmd1 & cmd2 &",
      "Nessuna delle altre opzioni è corretta",
      "cmd1 & cmd2;",
      "( cmd1; cmd2 ) &",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Questo quesito è la versione complementare del precedente, in cui l'opzione corretta è presente.\n\n- **Perché l'opzione A è corretta:** La sintassi `cmd1 & cmd2 &` indica alla shell di avviare immediatamente `cmd1` in background, e successivamente di avviare immediatamente `cmd2` in background. Entrambi i processi procederanno in esecuzione asincrona concorrente senza bloccare la shell.\n- **Perché le altre opzioni sono errate:** L'opzione C avvia solo il primo in background. L'opzione D esegue i comandi sequenzialmente all'interno di un gruppo in background, impedendo la reale concorrenza tra i due."
  },
  {
    "id": 1026,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sul comando \"time\" è falsa?",
    "options": [
      "Il comando /usr/bin/time cmd ha anche l'effetto di eseguire il comando cmd",
      "Il comando /usr/bin/time cmd può solo mostrare il tempo (di CPU, di sistema, e reale)",
      "Esistono 2 comandi time: uno è una keyword della bash e l'altro corrisponde ad un file eseguibile (solitamente /usr/bin/time)",
      "Il comando time cmd, eseguito dalla bash, può solo mostrare il tempo (di CPU, disistema, e reale)",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "In Linux esistono due entità distinte denominate `time`:\n1. Una keyword (parola chiave) integrata nella shell bash (built-in `time`).\n2. Un programma eseguibile indipendente situato nel filesystem (solitamente `/usr/bin/time`).\n\n- **Perché l'opzione B è corretta (ovvero è l'affermazione FALSA):** L'affermazione sostiene che `/usr/bin/time cmd` possa *solo* mostrare il tempo di CPU, di sistema e reale. Questo è falso: l'eseguibile di sistema `/usr/bin/time` (a differenza del built-in della bash) dispone di numerose opzioni avanzate (come `-v` o `--verbose`) che consentono di raccogliere ed esibire una vasta gamma di statistiche sull'uso delle risorse del sistema da parte del comando monitorato, come l'uso massimo della memoria RAM (max RSS), i page fault, i cambi di contesto volontari e involontari, le operazioni di I/O, ecc.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A è vera (time esegue il comando di cui deve misurare i tempi). L'opzione C è vera (esistono sia la keyword di shell che il file `/usr/bin/time`). L'opzione D è vera perché il comando `time` integrato nella bash ha funzionalità limitate e si limita a mostrare le tre misurazioni temporali standard."
  },
  {
    "id": 1027,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sulle syscall wait e waitpid è falsa?",
    "options": [
      "Se una chiamata wait(&status); ha successo, il valore di status coincide con l'exit status del processo figlio appena terminato",
      "Ogni chiamata wait(&status); è equivalente alla chiamata waitpid(-1, &status, 0)",
      "Le chiamate alla wait sono sempre bloccanti",
      "Le chiamate alla waitpid possono non essere bloccanti",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "La variabile `status` passata per indirizzo alle chiamate `wait(&status)` o `waitpid(pid, &status, options)` non contiene direttamente il semplice valore intero restituito dal figlio.\n\n- **Perché l'opzione A è corretta (ovvero è l'affermazione FALSA):** Il valore memorizzato nella variabile intera `status` è una maschera di bit complessa che include varie informazioni codificate dal kernel: se il figlio è terminato normalmente (e in tal caso l'exit status), se è stato ucciso da un segnale (e quale segnale), o se è stato stoppato. Per estrarre l'effettivo codice di terminazione restituito dal figlio (exit status), è obbligatorio decodificare la variabile `status` tramite le macro fornite da `<sys/wait.h>`, in particolare verificando prima `WIFEXITED(status)` e poi estraendo il valore con `WEXITSTATUS(status)`. Quindi il valore grezzo di `status` *non* coincide con l'exit status.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione B è vera (la wait generica equivale a waitpid su un figlio qualsiasi `-1` in modalità bloccante). L'opzione C è vera perché `wait` attende indefinitamente finché un figlio non cambia stato. L'opzione D è vera perché `waitpid` supporta l'opzione `WNOHANG` che la rende non-bloccante."
  },
  {
    "id": 1028,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "[C?] Dato il codice seguente, qual è l'output?\n\n```c\n#include<stdio.h>\n\nvoid knock_knock(char* s) {\n       while (*s++ != '\\0')\n               printf(\"Bazinga\");\n}\n\nint main() {\n    int data[5] = { -1, -3, 256, -4, 0 };\n    knock_knock((char *) data);\n    return 0;\n}\n```",
    "options": [
      "BazingaBazingaBazingaBazingaBazingaBazingaBazingaBazinga",
      "BazingaBazingaBazingaBazingaBazingaBazinga",
      "BazingaBazingaBazingaBazingaBazinga",
      "BazingaBazingaBazingaBazingaBazingaBazingaBazinga",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Analizziamo il comportamento del codice in C:\n```c\nint data[5] = { -1, -3, 256, -4, 0 };\nknock_knock((char *) data);\n```\nLa funzione `knock_knock` riceve il puntatore all'array di interi castato a puntatore a caratteri (`char *s`). Poiché un intero occupa tipicamente 4 byte su architetture a 32/64 bit, l'array di interi viene reinterpretato come una sequenza di byte (caratteri).\nRappresentazione in byte dei valori interi in memoria (supponendo Little Endian standard):\n- `-1` (in esadecimale `0xFFFFFFFF`): composto da 4 byte tutti diversi da zero (`0xFF, 0xFF, 0xFF, 0xFF`).\n- `-3` (in esadecimale `0xFFFFFFFD`): composto da 4 byte tutti diversi da zero (`0xFD, 0xFF, 0xFF, 0xFF`).\n- `256` (in esadecimale `0x00000100`): composto dai byte `0x00, 0x01, 0x00, 0x00` in Little Endian. Il primo byte incontrato in memoria per questo intero è `0x00` (il byte nullo, che corrisponde al carattere `'\\0'`).\n\nIl ciclo `while (*s++ != '\\0')` nella funzione scorre la memoria byte per byte. Essa stamperà \"Bazinga\" per ogni byte non-nullo incontrato prima di trovare il primo byte nullo `0x00`.\nI byte percorsi sono:\n- I 4 byte non-nulli di `-1` (4 stampe di \"Bazinga\").\n- I 4 byte non-nulli di `-3` (4 stampe di \"Bazinga\").\n- Il primo byte di `256` che è `0x00`. Questo byte nullo soddisfa la condizione `*s == '\\0'`, facendo terminare il ciclo.\nIn totale, il ciclo esegue 8 iterazioni prima di fermarsi.\n\n- **Perché l'opzione A è corretta:** Vengono stampati esattamente 8 \"Bazinga\".\n- **Perché le altre opzioni sono errate:** Le altre opzioni non considerano la scomposizione degli interi in byte e la rappresentazione Little Endian del numero `256` che posiziona il byte nullo al nono byte dell'array."
  },
  {
    "id": 1029,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulla comunicazione tra processi in Linux è vera?",
    "options": [
      "Per far comunicare qualunque coppia di processi è necessario metterli in pipeling da shell",
      "Usando la syscall pipe, è possibile far comunicare qualunque coppia di processi",
      "Nessuna delle opzioni è vera",
      "Usando le named pipes, è possibile far comunicare solo processi parenti (ad es., padre con figlio)",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito analizza i meccanismi di Inter-Process Communication (IPC) in Linux:\n\n- **Perché l'opzione C è corretta:** Tutte le altre opzioni proposte (A, B, D) sono false:\n  - L'opzione A è falsa perché la pipeline da shell (`|`) è solo un modo interattivo e non è affatto l'unico: due processi possono comunicare tramite socket, memoria condivisa (shared memory), code di messaggi, segnali o file sul disco.\n  - L'opzione B è falsa perché la syscall `pipe(2)` crea una pipe anonima unidirezionale che richiede che i processi abbiano un legame di parentela (es. padre e figlio generato tramite fork) per poter condividere i file descriptor generati. Non può essere usata per far comunicare due processi arbitrari e indipendenti.\n  - L'opzione D è falsa perché le named pipe (create con `mkfifo` o `mknod`) appaiono come file speciali nel filesystem. Qualsiasi coppia di processi indipendenti nel sistema (anche non parenti) può usarle per comunicare, a patto di avere i permessi di lettura/scrittura sul file FIFO.\nQuindi, nessuna delle opzioni è vera (opzione C)."
  },
  {
    "id": 1030,
    "topic": "Sistemi Operativi II",
    "question": "Si vuole scrivere un programma equivalente al seguente script. Quale dei seguenti frammenti di codice realizza quanto mostrato?\n\n```bash\necho -n \"Esecuzione in corso...\"\n/bin/ls -la /\necho \"fatto\"\n```",
    "options": [
      "Nessuna delle altre opzioni è corretta",
      "printf(\"Esecuzione in corso...\"); execl(\"/bin/ls\", \"/bin/ls\", \"-la\", \"/\", NULL); printf(\"fatto\\n\"); char **argv = {\"-la\", \"/\", 0};",
      "printf(\"Esecuzione in corso...\"); execv(\"/bin/ls\", \"-la\", \"/\", NULL); printf(\"fatto\\n\");",
      "printf(\"Esecuzione in corso...\"); execl(\"/bin/ls\", \"/bin/ls\", \"-la\", \"/\"); printf(\"fatto\\n\")",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Lo script bash esegue in sequenza: la stampa di un messaggio iniziale, l'avvio del programma `/bin/ls -la /`, e la stampa del messaggio finale 'fatto'.\n\n- **Perché l'opzione A è corretta:** Nessuno dei frammenti di codice C proposti (B, C, D) realizza correttamente lo script:\n  - Le funzioni della famiglia `exec` (`execl`, `execv`, ecc.) *sostituiscono* interamente l'immagine del processo corrente con quella del nuovo programma. Se la chiamata ha successo, il controllo non ritorna mai al programma chiamante e le istruzioni successive (in particolare la stampa `printf(\"fatto\\n\");`) non verranno mai eseguite. Per realizzare lo script, il programma C avrebbe dovuto eseguire una `fork()`, far chiamare la `exec` al figlio, e far attendere al padre la terminazione del figlio tramite `wait` prima di stampare 'fatto'.\n  - Inoltre, le chiamate nei frammenti B, C, D contengono errori di sintassi evidenti: in B l'array `argv` è dichiarato dopo la exec, in C si usa `execv` passando parametri singoli anziché un array, in D manca il terminatore `NULL` nella execl.\nQuindi, nessuna delle opzioni è corretta (opzione A)."
  },
  {
    "id": 1031,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sui comandi less e more è falsa?",
    "options": [
      "Sono specialmente utili quando si vuole visualizzare un output molto lungo (che non è possibile visualizzare in un'intera schermata di terminale)",
      "Entrambi permettono di ricercare espressioni regolari",
      "Per terminarli occorre premere CTRL+C",
      "Sono entrambi interattivi",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "I comandi `less` e `more` sono paginatori di testo (terminal pagers) che consentono la lettura interattiva di file di grandi dimensioni.\n\n- **Perché l'opzione C è corretta (ovvero è l'affermazione FALSA):** Per uscire (terminare) sia da `less` che da `more` in modo pulito, l'utente deve premere il tasto `Q` (quit). Premere `CTRL+C` non termina il programma, ma interrompe semplicemente l'operazione corrente (come una ricerca testuale o il caricamento di un file molto grande).\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A descrive l'utilità primaria dei paginatori. L'opzione B è vera perché sia `less` che `more` supportano la ricerca testuale interattiva (es. digitando `/pattern`). L'opzione D è vera perché entrambi i comandi rispondono interattivamente a input da tastiera per scorrere il testo."
  },
  {
    "id": 1032,
    "topic": "Sistemi Operativi II",
    "question": "Una directory di un filesystem:",
    "options": [
      "Può contenere solo file regolari e altre directory",
      "Non può mai contenere degli hard link",
      "Nessuna delle opzioni è vera",
      "Ha sempre una directory padre, eventualmente corrisponde a se stessa",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Una directory è un file speciale contenente una tabella che mappa i nomi dei file ai rispettivi numeri di inode.\n\n- **Perché l'opzione D è corretta:** All'interno di una struttura di filesystem ad albero gerarchico, ogni directory possiede sempre un riferimento alla propria directory padre, rappresentato dalla voce speciale `..` (punto punto). Nel caso della directory radice (root `/`), che non ha un padre fisico al di sopra di essa, la voce `..` punta a `/` stessa. Pertanto, ogni directory ha sempre una directory padre, che eventualmente coincide con se stessa.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché una directory può contenere molti altri tipi di file, come file speciali di dispositivo (character/block devices in `/dev`), socket di rete o named pipe. L'opzione B è errata perché una directory può contenere hard link a file regolari (anzi, ogni voce di file in una directory è tecnicamente un hard link)."
  },
  {
    "id": 1033,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle syscall di Linux che riguardano i files e che si trovano nella sezione 2 del manuale è falsa?",
    "options": [
      "Mentre le funzioni della libreria standard possono solo agire solo su file regolari, le syscall di Linux possono agire su tutti i tipi di file (regolari, directory, pipe, ...)",
      "Le funzioni della libreria standard agiscono su una struttura di tipo FILE *, mentre le syscall agiscono su un file descriptor intero",
      "Nessuna delle syscall di Linux accetta come argomento input o output formattato stile printf",
      "Le syscall Linux permettono solamente le seguenti operazioni: apertura, chiusura, scrittura, lettura, posizionamento",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito valuta la comprensione del funzionamento delle chiamate di sistema per i file descriptor.\n\n- **Perché l'opzione C è corretta (ovvero è l'affermazione FALSA):** Nel contesto di questo esame, l'opzione C viene indicata come l'affermazione falsa. A livello architetturale, le chiamate di sistema (syscall) della sezione 2 come `write(2)` e `read(2)` operano esclusivamente su buffer di byte grezzi e non eseguono alcuna formattazione dei dati. Tutta la formattazione (stile printf) viene gestita in user-space dalle funzioni di libreria della sezione 3 (come `printf(3)` o `sprintf(3)`) prima di invocare la syscall. L'affermazione C sostiene che 'nessuna delle syscall di Linux accetta input o output formattato': questa affermazione viene considerata falsa nella modellazione didattica del corso (oppure rappresenta una convenzione dell'esame dovuta a definizioni specifiche o errata interpretazione).\n- **Perché le altre opzioni non sono selezionabili:** L'opzione A e B descrivono in modo corretto le differenze tra la libreria standard (che lavora su stream ad alto livello `FILE *` e file regolari) e le syscall del kernel (che operano a basso livello su file descriptor interi e su qualsiasi risorsa rappresentata come file). L'opzione D è un'affermazione considerata vera in quanto riassume le operazioni di base di I/O."
  },
  {
    "id": 1034,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle syscall di Linux che riguardano le directory è falsa?",
    "options": [
      "La syscall readdir, con argomento uguale a quanto ritornato da una precedente opendir avvenuta con successo, ritorna un puntatore ad una struttura struct dirent, che contiene il nome di un file o di una directory contenuta nella directory passata a opendir",
      "Chiamare la syscall open su una directory può avere successo",
      "Per poter cambiare il contenuto di una directory occorre aprirla con la syscall opendir",
      "Per poter leggere il contenuto di una directory occorre aprirla con la syscall opendir",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "La gestione delle directory in C avviene tramite apposite funzioni di sistema.\n\n- **Perché l'opzione C è corretta (ovvero è l'affermazione FALSA):** Per cambiare il contenuto di una directory (ovvero creare, cancellare o rinominare i file in essa contenuti) *non* si utilizza la chiamata `opendir(3)`. La modifica del contenuto di una directory avviene indirettamente invocando chiamate di sistema specifiche per la creazione o rimozione dei link, quali `open(2)` con flag `O_CREAT`, `link(2)`, `unlink(2)`, `mkdir(2)`, `rmdir(2)` o `rename(2)`. La funzione `opendir` serve esclusivamente ad aprire la directory in modalità di sola lettura per permettere lo scorrimento dei suoi elementi tramite `readdir`.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A descrive correttamente il funzionamento di `readdir` e della struttura `struct dirent`. L'opzione B è vera perché chiamare `open` su una directory con il flag `O_RDONLY` ha successo (restituisce un file descriptor valido, che può essere usato ad esempio per la syscall `getdents`). L'opzione D è vera perché `opendir` è il meccanismo standard di libreria per leggere la struttura interna di una directory."
  },
  {
    "id": 1035,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sul comando kill è falsa?",
    "options": [
      "Per mandare il segnale 9 al processo in background con job id 3, è sufficiente scrivere il comando kill -KILL %3",
      "Per mandare il segnale SIGTERM al processo con PID 19330, è sufficiente scrivere il comando kill -SIGTERM 19330",
      "Per mandare il segnale SIGINT al processo in background con job id 3, è sufficiente scrivere il comando kill -`kill -l SIGINT` %3",
      "Per mandare il segnale 9 al processo con PID 10, è sufficiente scrivere il comando kill -KILL %10",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Il comando `kill` invia segnali ai processi specificati tramite PID o Job ID.\n\n- **Perché l'opzione D è corretta (ovvero è l'affermazione FALSA):** La sintassi `%ID` viene utilizzata per specificare un *Job ID* gestito dalla shell corrente (es. `%1` indica il job 1). Quando si vuole inviare un segnale a un processo identificato dal suo *PID* (Process ID), il valore numerico del PID deve essere passato direttamente come argomento, senza il prefisso `%`. Quindi, scrivere `kill -KILL %10` invia il segnale al job numero 10, non al processo con PID 10. Per quest'ultimo, il comando corretto sarebbe `kill -9 10` o `kill -KILL 10`.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A e B mostrano sintassi corrette per inviare rispettivamente segnali a un Job ID (`%3`) e a un PID (`19330`). L'opzione C usa una command substitution valida (la chiamata `kill -l SIGINT` restituisce il numero del segnale, che viene inserito dinamicamente come opzione)."
  },
  {
    "id": 1036,
    "topic": "Sistemi Operativi II",
    "question": "Per eliminare tutte le linee duplicate in un file di testo (senza preoccuparsi dell'ordinamento delle righe) occorre:",
    "options": [
      "utilizzare congiuntamente i comandi sort e uniq",
      "utilizzare congiuntamente i comandi cat e grep",
      "utilizzare il comando uniq con opzione -u",
      "utilizzare il comando uniq",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "In Unix/Linux, il comando `uniq` viene utilizzato per filtrare o visualizzare le righe adiacenti duplicate in un file.\n\n- **Perché l'opzione A è corretta:** Poiché `uniq` rileva e rimuove i duplicati solo se questi sono *consecutivi* (adiacenti), se le righe duplicate sono sparse nel file non verranno rimosse. Per eliminare *tutte* le linee duplicate indipendentemente dalla loro posizione, è indispensabile prima ordinare il file in modo che le righe identiche diventino adiacenti, e poi applicare `uniq`. La pipeline standard è: `sort file.txt | uniq`.\n- **Perché le altre opzioni sono errate:** L'opzione B (`cat` e `grep`) non offre filtri nativi per la rimozione dei duplicati. Le opzioni C e D propongono di usare `uniq` da solo, il che fallirebbe nel rimuovere duplicati non adiacenti. Inoltre, l'opzione `-u` mostra solo le righe che *non* hanno duplicati, anziché rimuovere le copie extra."
  },
  {
    "id": 1037,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle pipe di Linux è vera?",
    "options": [
      "Usando la syscall pipe, vengono automaticamente aperti 2 file descriptor",
      "Nessuna delle altre opzioni è vera",
      "Per usare le named pipes, è sempre necessario chiamare la syscall mkfifo",
      "usando la syscall mkfifo, viene aperto un solo file descriptor",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Le pipe anonime e le named pipe (FIFO) sono canali di comunicazione tra processi.\n\n- **Perché l'opzione A è corretta:** La system call `pipe(int pipefd[2])` crea un canale di comunicazione unidirezionale nel kernel e restituisce all'applicazione due nuovi file descriptor aperti: `pipefd[0]` per la lettura e `pipefd[1]` per la scrittura.\n- **Perché le altre opzioni sono errate:** L'opzione C è errata perché le named pipe possono essere create sia tramite la syscall `mkfifo(3)` sia tramite `mknod(2)` con il flag `S_IFIFO`. L'opzione D è errata perché la chiamata a `mkfifo` crea semplicemente il file speciale FIFO sul disco, ma *non* apre alcun file descriptor; l'apertura dei descrittori avviene successivamente quando i processi eseguono la chiamata `open` sul file FIFO."
  },
  {
    "id": 1038,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle syscall di Linux che riguardano i files è falsa?",
    "options": [
      "La syscall chown(nomefile, -1, gid) ha lo stesso effetto del comando bash chgrp gid nomefile",
      "La syscall mkdir(nomedir, mode) ha lo stesso effetto del comando bash mkdir -m mode nomedir",
      "La syscall dup2(2, 1) ha l'effetto di ridirigere lo stdout nello stderr",
      "La syscall stat(nomefile, buf) ha lo stesso effetto del comando bash stat nomefile",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Questo quesito confronta il comportamento di alcune chiamate di sistema con i rispettivi comandi di shell.\n\n- **Perché l'opzione D è corretta (ovvero è l'affermazione FALSA):** Il comando bash `stat nomefile` stampa a schermo molteplici informazioni formattate sul file (dimensioni, blocchi, permessi, UID, GID, date di accesso/modifica). Al contrario, la system call `stat(nomefile, buf)` non produce alcun output a schermo; essa si limita a riempire una struttura dati di tipo `struct stat` passata come puntatore (`buf`) con i metadati del file. La formattazione e la stampa dell'output rimangono a totale carico del programma utente.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A è vera perché passando `-1` come proprietario a `chown`, quest'ultimo non viene modificato, alterando solo il gruppo (`chgrp`). L'opzione B descrive la corretta corrispondenza per la creazione di directory con permessi specifici. L'opzione C è vera perché `dup2(2, 1)` duplica il descrittore `2` (stderr) sul descrittore `1` (stdout), ridirigendo di fatto i messaggi inviati a stdout verso stderr."
  },
  {
    "id": 1039,
    "topic": "Sistemi Operativi II",
    "question": "Relativamente alla programmazione bash, quale delle seguenti affermazioni sul carattere # è vera?",
    "options": [
      "Rappresenta sempre l'inizio di un commento, con un'unica eccezione: quando è preceduto dal carattere $",
      "Se è seguito dal carattere !, non rappresenta mai l'inizio di un commento",
      "Nessuna delle opzioni è vera",
      "Se presente in uno script, tutto quello che lo segue è sempre considerato commento.",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito riguarda il comportamento del carattere `#` nella sintassi dello scripting bash.\n\n- **Perché l'opzione C è corretta:** Tutte le affermazioni proposte (A, B, D) sono false:\n  - L'opzione A è falsa perché esistono altre situazioni in cui `#` non inizia un commento: ad esempio quando è all'interno di stringhe quotate (es. `echo \"# non un commento\"`) o in espansioni di parametri (es. `${#var}`).\n  - L'opzione B è falsa perché la sequenza `#!` (shebang) all'inizio di un file di script *è* tecnicamente interpretata come un commento dalla shell se questa tenta di eseguirla (in quanto inizia con `#`), anche se viene letta dal kernel per decidere l'interprete.\n  - L'opzione D è falsa perché, come detto, se `#` si trova dentro virgolette o fa parte di costrutti speciali, non introduce un commento.\nQuindi, nessuna delle opzioni è vera (opzione C)."
  },
  {
    "id": 1040,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sulle syscall dei processi in Linux è falsa?",
    "options": [
      "La syscall setuid() permette a qualsiasi processo di cambiare il suo real user ID",
      "La syscall getuid() permette a qualsiasi processo di conoscere il suo real user ID",
      "La syscall getppid() ritorna il PID del processo che ha generato quello chiamante (o che lo ha adottato)",
      "La syscall getpid() ritorna il PID del processo chiamante",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "La gestione dell'identità utente (User ID) nei processi Linux è regolata da rigide politiche di sicurezza.\n\n- **Perché l'opzione A è corretta (ovvero è l'affermazione FALSA):** La system call `setuid(uid)` *not* permette a \"qualsiasi\" processo di modificare arbitrariamente il proprio Real User ID. Se il processo chiamante non dispone dei privilegi di root (non è un processo privilegiato con UID 0), la chiamata `setuid` può solo impostare l'User ID effettivo al valore del Real User ID o del Saved Set-User-ID. Un utente non privilegiato non può in alcun modo assumere l'identità di un altro utente arbitrario.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione B, C e D descrivono correttamente le funzioni informative `getuid()`, `getppid()` e `getpid()`, le quali sono sempre accessibili a qualsiasi processo senza restrizioni di sicurezza."
  },
  {
    "id": 1041,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sul comando ps è vera?",
    "options": [
      "Senza nessun argomento, mostra tutti i processi lanciati dall'utente attuale nel terminale attuale",
      "Per ogni processo, mostra sempre il suo PID, indipendentemente dagli argomenti con cui viene lanciato",
      "Non è possibile usarlo per vedere i processi lanciati dall'utente root",
      "È possibile usarlo per vedere solo i processi che superano un certo uso della RAM",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Il comando `ps` (process status) mostra informazioni sui processi attivi nel sistema.\n\n- **Perché l'opzione A è corretta:** Se eseguito senza alcun argomento, il comando `ps` si limita a mostrare l'elenco dei processi che appartengono all'utente corrente e che sono associati al medesimo terminale (TTY) da cui il comando è stato invocato (tipicamente mostrando solo la shell bash e il comando ps stesso).\n- **Perché le altre opzioni sono errate:** L'opzione B è errata perché è possibile personalizzare l'output di `ps` tramite l'opzione `-o` specificando quali colonne visualizzare; se escludiamo la colonna `pid`, il PID non verrà mostrato. L'opzione C è errata perché l'utente root può essere monitorato come chiunque altro (es. con `ps -u root`). L'opzione D è errata perché `ps` mostra i processi in base a filtri di appartenenza (utente, terminale, sessione), non in base a soglie di utilizzo della RAM."
  },
  {
    "id": 1042,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Nessuna delle altre opzioni è vera",
      "Per ogni terminale aperto, ci può essere al massimo un job in background",
      "Per lanciare un processo in modo tale che non scriva su stdout, lasciando così modo di scrivere altri comandi sulla bash, è sufficiente lanciarlo in background",
      "Se si vuole dare input da stdin senza redirezioni ad un processo, è necessario lanciarlo in foreground",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Questo quesito testa la comprensione della gestione dell'I/O nei processi e della differenza tra foreground e background nella shell.\n\n- **Perché l'opzione D è corretta:** Quando un processo viene eseguito in background (usando `&`), la shell lo disconnette dallo Standard Input del terminale (assegnandogli `/dev/null` in lettura) per evitare conflitti con i comandi digitati dall'utente. Di conseguenza, se un processo necessita di ricevere input interattivi direttamente da tastiera (stdin) senza redirezioni da file, esso *deve* necessariamente essere eseguito in foreground.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata poiché l'opzione D è corretta. L'opzione B è errata perché una shell può gestire molteplici job in background contemporaneamente. L'opzione C è errata perché avviare un processo in background *non* impedisce al processo di scrivere sullo Standard Output (stdout); i suoi messaggi continueranno a comparire sul terminale, mescolandosi con l'output della shell, a meno che non si effettui una redirezione esplicita (es. `> /dev/null`)."
  },
  {
    "id": 1043,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Nessuna delle altre opzioni è vera",
      "Il text segment contiene le istruzioni da eseguire, e non può essere condiviso con altri processi",
      "Lo stack contiene i dati statici inizializzati ed alcune costanti d'ambiente",
      "Il process control block (PCB) mantiene le informazioni essenziali di ogni processo, e uno stesso PCB può essere condiviso tra processi diversi",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Analizziamo i componenti fondamentali di un processo in esecuzione:\n\n- **Perché l'opzione A è corretta:** Tutte le affermazioni B, C, D sono tecnicamente false:\n  - L'opzione B è falsa perché il segmento di codice (`text segment`), contenente le istruzioni eseguibili in sola lettura, *può* ed è comunemente condiviso in memoria RAM tra più processi che eseguono lo stesso programma (es. più istanze di `bash` o di `ls`), al fine di risparmiare memoria fisica.\n  - L'opzione C è falsa perché lo stack contiene i record di attivazione delle funzioni (variabili locali, parametri e indirizzi di ritorno), mentre i dati statici inizializzati risiedono nel `data segment` e le variabili d'ambiente risiedono in cima allo stack ma non sono variabili statiche.\n  - L'opzione D è falsa perché il Process Control Block (PCB) contiene le informazioni specifiche e private di un singolo processo (PID, registri, stato, descrittori); non può essere condiviso tra processi distinti.\nQuindi, nessuna delle altre opzioni è vera (opzione A)."
  },
  {
    "id": 1044,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è falsa?",
    "options": [
      "I comandi builtin della bash generano sempre nuovi processi",
      "Per capire se un comando della bash è o no builtin, è sufficiente usare il comando type",
      "Il comando cd è builtin della bash",
      "Un comando builtin della bash non corrisponde ad alcun file eseguibile dedicato",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "I comandi builtin (incorporati) sono funzioni implementate direttamente all'interno del codice dell'interprete di comandi (la shell bash).\n\n- **Perché l'opzione A è corretta (ovvero è l'affermazione FALSA):** L'affermazione sostiene che i comandi builtin generino sempre nuovi processi. Questo è falso: i comandi builtin vengono eseguiti direttamente dall'istanza della shell corrente, nello stesso thread e spazio di indirizzamento, senza effettuare alcuna chiamata a `fork(2)`. Questo garantisce la massima velocità ed è necessario per comandi come `cd` (se `cd` venisse eseguito in un processo figlio, cambierebbe la directory corrente solo del figlio, lasciando la shell di partenza invariata).\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione B è vera perché il comando `type cmd` specifica se `cmd` è una parola chiave, un builtin, un alias o un file eseguibile sul disco. L'opzione C e D descrivono correttamente la natura del comando `cd` e dei builtin in generale."
  },
  {
    "id": 1045,
    "topic": "System Call e File",
    "question": "Quale dei seguenti campi non è presente nel process control block?",
    "options": [
      "Change time",
      "GID reale ed effettivo",
      "Nice",
      "Current working directory",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Il Process Control Block (PCB) è la struttura dati interna al kernel che memorizza tutte le informazioni necessarie a gestire un determinato processo.\n\n- **Perché l'opzione A è corretta:** Il campo `Change time` (ctime) è un metadato associato agli inode dei *file* nel filesystem, e non ha alcun significato o utilità all'interno del PCB di un processo.\n- **Perché le altre opzioni sono errate:** Le opzioni B (GID reale ed effettivo), C (priorità dinamica Nice per lo scheduling) e D (directory di lavoro corrente) sono tutte informazioni essenziali che il kernel deve tracciare per ciascun processo attivo, e sono quindi regolarmente memorizzate nel PCB (nella struttura `task_struct` in Linux)."
  },
  {
    "id": 1046,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sui comandi della bash è falsa?",
    "options": [
      "Il comando type file mostra il tipo del file file (regolare, directory, etc)",
      "Il comando whoami mostra lo username dell'utente attualmente loggato nel terminale in cui viene digitato il comando (potrebbe non coincidere con l'utente che ha effettuato il login grafico)",
      "Il comando id può essere usato per visualizzare i gruppi cui un utente appartiene",
      "Il comando which cmd mostra qual è il file eseguibile che viene eseguito quando si lancia il comando cmd, ma solo per i comandi che non sono builtin",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Questo quesito valuta la conoscenza di vari comandi informativi della shell bash:\n\n- **Perché l'opzione A è corretta (ovvero è l'affermazione FALSA):** Il comando `type file` *not* mostra il tipo di file (regolare, directory, ecc.). Il comando `type` serve a indicare alla shell come verrebbe interpretato il nome passato come argomento (se è un builtin, un file eseguibile cercato nel PATH, un alias o una funzione). Per mostrare il tipo di un file nel filesystem, si deve utilizzare il comando `file nomefile` oppure `stat nomefile`.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione B descrive correttamente il funzionamento di `whoami`. L'opzione C è vera perché `id` mostra l'UID e l'elenco di tutti i GID a cui appartiene l'utente. L'opzione D è vera perché `which` cerca i file eseguibili nelle directory elencate nella variabile `$PATH`; non rileva i comandi builtin poiché non corrispondono a file eseguibili indipendenti."
  },
  {
    "id": 1047,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sulle syscall dei processi in Linux è vera?",
    "options": [
      "Se un processo viene lanciato nel seguente modo: var=valore ./a.out, allora esso può ottenere var con la chiamata a getenv(\"valore\");",
      "Per qualsiasi processo è possibile conoscere il suo ambiente di esecuzione senza effettuare alcuna syscall",
      "Se un processo viene lanciato nel seguente modo: var=valore ./a.out, allora esso può ottenere valore con la chiamata a setenv(\"var\", \"valore\", 1);",
      "Se un processo viene lanciato nel seguente modo: var=valore ./a.out, allora esso può ottenere valore con la chiamata a putenv(\"var=valore\");",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Questo quesito esplora la gestione delle variabili d'ambiente nei processi Linux.\n\n- **Perché l'opzione B è corretta:** In Linux, l'ambiente di esecuzione di un processo (l'elenco delle variabili d'ambiente) è memorizzato in un array globale di stringhe ``char **environ``. Un processo può scorrere e leggere questo array direttamente in user-space, senza dover effettuare alcuna chiamata di sistema (syscall) al kernel. Inoltre, le informazioni sull'ambiente di qualsiasi processo sono esposte dal kernel nel file virtuale `/proc/PID/environ`.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché `getenv()` accetta come argomento il *nome* della variabile (es. `getenv(\"var\")`), non il suo valore, e restituisce il valore associato. L'opzione C e D sono errate perché `setenv` e `putenv` modificano l'ambiente ma sono descritte con parametri o finalità invertite rispetto alla logica del quesito (e `var=valore ./a.out` definisce la variabile nell'ambiente prima ancora che il programma inizi, rendendo inutile impostarla nuovamente)."
  },
  {
    "id": 1048,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni è vera?",
    "options": [
      "Linux è multiutente, perché definisce più utenti, di cui però uno solo può essere loggato su una data macchina",
      "Linux è multiutente, perché permette a più utenti contemporaneamente di essere loggati sulla stessa macchina",
      "Linux è multiprocesso, perché permette a più utenti contemporaneamente di essere loggati sulla stessa macchina",
      "Linux è multiprocesso, perché può essere usato su una macchina con più processori",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Linux è descritto come un sistema operativo multitasking, multiprocesso e multiutente.\n\n- **Perché l'opzione B è corretta:** La caratteristica di essere \"multiutente\" (multiuser) significa che il sistema operativo consente a molteplici utenti distinti di autenticarsi contemporaneamente sulla stessa macchina (ad esempio tramite connessioni di rete SSH, terminali virtuali TTY o sessioni grafiche concorrenti) e di eseguire i propri processi in isolamento di sicurezza.\n- **Perché le altre opzioni sono errate:** L'opzione A contraddice il concetto di multiutente (limitando l'accesso a un utente alla volta). L'opzione C associa erroneamente la definizione di multiprocesso alla presenza di più utenti. L'opzione D associa erroneamente il multiprocesso (che è la capacità di gestire l'esecuzione di più processi contemporaneamente tramite schedulazione) alla sola presenza di più processori fisici (hardware multiprocessore)."
  },
  {
    "id": 1049,
    "topic": "Sistemi Operativi II",
    "question": "Il linguaggio C:",
    "options": [
      "È incompatibile con i Sistemi Operativi della famiglia Windows",
      "Nessuna delle altre opzioni è vera",
      "È un linguaggio strutturato e compilato",
      "È un linguaggio non strutturato e compilato",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Il C è un linguaggio di programmazione storico sviluppato da Dennis Ritchie.\n\n- **Perché l'opzione C è corretta:** Il C è un linguaggio di programmazione \"strutturato\" (perché supporta la programmazione strutturata tramite costrutti come cicli, condizioni e funzioni, eliminando la necessità del comando GOTO) e \"compilato\" (in quanto il codice sorgente viene tradotto interamente da un compilatore in codice macchina eseguibile nativo prima dell'esecuzione).\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché i programmi C sono perfettamente compatibili e compilabili su sistemi Windows (es. tramite MSVC, MinGW, Clang). L'opzione D usa il termine 'non strutturato' che è falso."
  },
  {
    "id": 1050,
    "topic": "Gestione dei Processi",
    "question": "Quale dei seguenti non è un possibile stato di un processo Linux?",
    "options": [
      "Uninterruptible sleep",
      "Stopped",
      "Running",
      "Continued",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Nel kernel Linux, i processi passano attraverso diversi stati ben definiti durante il loro ciclo di vita.\n\n- **Perché l'opzione D è corretta:** 'Continued' *non* è uno stato interno di un processo in Linux. Esso rappresenta semplicemente una notifica o un evento (inviato ad esempio al padre tramite `waitpid` con il flag `WCONTINUED`) per segnalare che un processo precedentemente sospeso ha ripreso l'esecuzione a seguito di un segnale `SIGCONT`. Gli stati effettivi nel kernel sono: Running/Runnable (R), Uninterruptible Sleep (D), Interruptible Sleep (S), Stopped (T), Zombie (Z).\n- **Perché le altre opzioni sono errate:** Le opzioni A (Uninterruptible Sleep), B (Stopped) e C (Running) sono tutti stati di processo ufficiali e reali del kernel Linux."
  },
  {
    "id": 1051,
    "topic": "Gestione dei Processi",
    "question": "Quale dei seguenti non è un possibile stato di un processo Linux?",
    "options": [
      "Uninterruptible sleep",
      "Stopped",
      "Running",
      "Orphaned",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Questo quesito valuta la terminologia corretta sugli stati dei processi nel kernel.\n\n- **Perché l'opzione D è corretta:** 'Orphaned' (orfano) *non* è uno stato interno di un processo. Rappresenta una *relazione parentale* nel sistema operativo: un processo viene definito 'orfano' quando il suo processo padre termina prima di lui. In tal caso, il kernel riassegna il processo orfano a un processo padrino (storicamente `init` con PID 1, o un sub-reaper). Lo stato reale del processo orfano rimane solitamente Running o Sleeping.\n- **Perché le altre opzioni sono errate:** Come nel quesito precedente, Uninterruptible Sleep, Stopped e Running sono stati reali e codificati del processo."
  },
  {
    "id": 1052,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sul comando top è vera?",
    "options": [
      "Se lanciato con il comando top, per terminarlo è necessario premere CTRL+C",
      "Il suo output è uguale a quello di ps, ma le opzioni sono diverse",
      "Se lanciato con il comando top -b, per terminarlo è sufficiente premere il tasto Q",
      "Nessuna delle altre affermazioni è vera",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Il comando `top` fornisce una visualizzazione dinamica e in tempo reale delle risorse di sistema e dei processi attivi.\n\n- **Perché l'opzione D è corretta:** Tutte le altre affermazioni (A, B, C) sono false:\n  - L'opzione A è falsa perché quando `top` è in esecuzione interattiva standard sul terminale, premere `Q` (oppure `Esc`) è la procedura corretta e standard per terminarlo in modo pulito; non è obbligatorio usare `CTRL+C`.\n  - L'opzione B è falsa perché `top` e `ps` hanno formati di output strutturalmente molto diversi. Inoltre `top` aggiorna l'output periodicamente (dinamico), mentre `ps` scatta una fotografia istantanea (statico).\n  - L'opzione C è falsa perché quando `top` viene lanciato in modalità batch (`top -b`), esso non è più interattivo e non risponde agli input da tastiera come il tasto `Q`; per interromperlo in modalità batch occorre inviargli un segnale di interruzione (es. `CTRL+C`).\nQuindi, nessuna delle altre affermazioni è vera (opzione D)."
  },
  {
    "id": 1053,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Per visualizzare i processi attualmente in esecuzione su una determinata bash, è sufficiente usare il comando jobs",
      "Tutti i processi in background sono in stato Stopped",
      "Per riportare in foreground un determinato job in background, è sufficiente dare il comando fg sulla bash dove il job è in background, ma solo se tale job è l'attuale \"current job\" in background",
      "Per stoppare un processo in foreground, si può sia mandare un segnale SIGTSTP che premere CTRL+Z in una qualsiasi shell",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito verte sul controllo dei job in background e foreground nella shell bash.\n\n- **Perché l'opzione C è corretta:** Il comando `fg` senza argomenti porta in foreground il job contrassegnato come \"current job\" (identificato dal simbolo `+` nell'output di `jobs`). Se si desidera portare in foreground un altro job specifico, è necessario passarne l'identificatore (es. `fg %2`).\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché il comando `jobs` elenca solo i processi avviati dalla shell corrente che sono in background o sospesi, non mostra i processi di sistema in esecuzione generale né quelli in foreground sulla shell. L'opzione B è errata perché i processi in background possono essere in stato Running (eseguono codice in modo asincrono). L'opzione D è errata perché premere `CTRL+Z` invia il segnale `SIGTSTP` solo al processo attualmente in foreground associato al terminale; non ha effetto se premuto in una shell diversa da quella in cui gira il processo."
  },
  {
    "id": 1054,
    "topic": "Gestione della Memoria Dinamica",
    "question": "Si supponga di voler vedere, per tutti i processi dell'utente utente, il suo PID, il suo PPID, il comando usato per lanciare il processo (con tutti gli argomenti), la usa occupazione totale di memoria in kB e la sua attuale occupazione di memoria in RAM (senza considerare quindi la parte eventualmente swappata su disco), sempre in kB. Quale dei seguenti comandi è quello corretto?",
    "options": [
      "ps -uutente -o pid,ppid,cmd,rss,vsz",
      "ps -uutente -o pid,ppid,cmd,rss,sz",
      "ps -e -o pid,ppid,cmd,vsz,rss",
      "ps -uutente -o pid,ppid,cmd,vsz,rss",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Questo quesito testa le opzioni del comando `ps` per visualizzare specifiche informazioni sui processi e sulla memoria:\n- L'occupazione totale di memoria virtuale del processo (incluso lo spazio swappato e le librerie condivise) si chiama `VSZ` (Virtual Memory Size).\n- L'effettiva occupazione di memoria fisica residente in RAM si chiama `RSS` (Resident Set Size).\n\n- **Perché l'opzione D è corretta:** Per soddisfare le richieste:\n  - `-u utente`: filtra i processi dell'utente specificato.\n  - `-o format`: permette di definire le colonne in output.\n  - Le colonne richieste sono: PID (`pid`), PPID (`ppid`), comando con argomenti (`cmd` o `args`), memoria virtuale in kB (`vsz`), e memoria fisica residente in RAM in kB (`rss`).\nQuindi il comando esatto è `ps -uutente -o pid,ppid,cmd,vsz,rss`.\n- **Perché le altre opzioni sono errate:** L'opzione A inverte l'ordine delle ultime due colonne rispetto a quanto indicato, o non corrisponde alla sintassi standard. L'opzione B usa una colonna non standard `sz` anziché `vsz`. L'opzione C usa `-e` che mostra i processi di *tutti* gli utenti del sistema, violando la richiesta di mostrare solo quelli dell'utente specifico."
  },
  {
    "id": 1055,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni è vera?",
    "options": [
      "Ogni risorsa di un sistema Unix, ad eccezione dei processi e periferiche hardware, è rappresentato da un file",
      "Ogni risorsa di un sistema Unix, ad eccezione delle connessioni di rete (socket), è rappresentato da un file",
      "Ogni risorsa di un sistema Unix, ad eccezione dei processi, è rappresentato da un file",
      "In un sistema Unix tutte le risorse sono rappresentati da un file",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Una delle filosofie cardine dei sistemi operativi Unix e Linux è \"tutto è un file\" (everything is a file).\n\n- **Perché l'opzione C è corretta:** Quasi ogni risorsa del sistema (file regolari, directory, partizioni del disco, stampanti, terminali, schede audio, named pipe, socket di rete) è rappresentata all'interno dell'albero dei file e vi si può accedere tramite le classiche chiamate di I/O (`open`, `read`, `write`, `close`). L'unica eccezione fondamentale a questa regola è rappresentata dai *processi* (le entità attive in esecuzione), i quali non sono file (sebbene il sistema metta a disposizione il filesystem virtuale `/proc` per monitorarli, il processo in sé è un'entità di esecuzione gestita dallo scheduler, non un file).\n- **Perché le altre opzioni sono errate:** Le opzioni A e B escludono impropriamente le periferiche hardware o le socket di rete da questa filosofia, mentre anch'esse sono a tutti gli effetti rappresentate come file special (es. in `/dev`) o come socket descriptor trattabili come file descriptor. L'opzione D sostiene che \"tutte\" le risorse siano file senza eccezioni, ignorando il fatto che i processi non lo sono."
  },
  {
    "id": 1056,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sul comando kill è vera?",
    "options": [
      "È obbligatorio specificare il segnale da inviare, come numero intero",
      "Lanciato senza nessun argomento, manda SIGKILL all'ultimo processo lanciato",
      "Può essere usato per ottenere lo stesso risultato tanto del CTRL+C quanto del CTRL+Z",
      "Nessuna delle altre affermazioni è vera",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Il comando `kill` invia segnali ai processi.\n\n- **Perché l'opzione C è corretta:** Il comando `kill` può inviare qualsiasi segnale. In particolare:\n  - Inviare il segnale `SIGINT` (es. `kill -SIGINT PID` o `kill -2 PID`) ha lo stesso identico effetto sul processo del premere `CTRL+C` nella shell (entrambi inviano `SIGINT`).\n  - Inviare il segnale `SIGTSTP` (es. `kill -SIGTSTP PID` o `kill -20 PID`) ha lo stesso identico effetto sul processo del premere `CTRL+Z` nella shell (entrambi inviano `SIGTSTP`).\nQuindi `kill` può essere usato per ottenere lo stesso risultato di entrambe le combinazioni da tastiera.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché non è affatto obbligatorio specificare il segnale come numero intero; si può specificare come nome (es. `-SIGKILL`) ed è facoltativo (se omesso, invia il segnale di default `SIGTERM`). L'opzione B è errata perché senza argomenti il comando `kill` restituisce un errore di sintassi poiché richiede almeno un PID a cui inviare il segnale."
  },
  {
    "id": 1057,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Ogni processo è identificato da un PID e da un job id, che devono coincidere",
      "Un job è un comando della bash che prende sempre il controllo dello stdin",
      "Nessuna delle altre opzioni è vera",
      "Fissato un istante nell'esecuzione del sistema operativo, ci sarà sempre al massimo un job in foreground, mentre quelli in background possono essere più d'uno",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Analizziamo le affermazioni sui job e sui processi:\n\n- **Perché l'opzione C è corretta:** Tutte le affermazioni A, B, D sono false:\n  - L'opzione A è falsa perché il PID (Process ID) e il Job ID sono due identificatori completamente diversi. Il PID è assegnato globalmente dal kernel ed è un intero grande (es. `12345`). Il Job ID è assegnato localmente dalla shell per scopi di controllo interattivo ed è un numero piccolo (es. `1`, `2`, `3`). Di norma non coincidono.\n  - L'opzione B è falsa perché un job non deve necessariamente prendere il controllo dello stdin; ad esempio un job in background gira senza avere accesso a stdin.\n  - L'opzione D è falsa perché, sebbene ci sia al massimo un job in foreground in esecuzione interattiva che detiene il terminale, in sistemi multiprogrammati non c'è limite teorico al numero di processi o job attivi concorrentemente in background.\nQuindi, nessuna delle altre opzioni è vera (opzione C)."
  },
  {
    "id": 1058,
    "topic": "Gestione dei Processi",
    "question": "Si supponga che sia appena stata eseguita la seguente riga di codice di un processo. Quale delle seguenti affermazioni è vera?\n\n```c\nint pid = fork();\n```",
    "options": [
      "Nel processo padre, la variabile pid vale assume 1 solo valore, corrispondente al suo stesso PID",
      "Nel processo figlio, la variabile pid vale assume 1 solo valore, corrispondente al PID del padre",
      "C'è un nuovo processo pronto per andare in esecuzione, a meno che la variabile pid non valga -1",
      "Nel processo padre, la variabile pid assume 2 diversi valori",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "La chiamata di sistema `fork(2)` crea un nuovo processo duplicando quello esistente. La particolarità della `fork` è che viene chiamata una volta ma ritorna due volte:\n- Nel processo padre, ritorna il PID del processo figlio appena creato (un intero positivo).\n- Nel processo figlio, ritorna `0`.\n- Se la creazione del processo fallisce, ritorna `-1` nel padre e non viene creato alcun figlio.\n\n- **Perché l'opzione C è corretta:** Se la chiamata ha successo (ovvero non ritorna `-1`), viene creato un nuovo processo figlio che viene inserito dal kernel nella coda dei processi pronti (stato Ready/Runnable) ed è quindi pronto per andare in esecuzione.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché la variabile `pid` nel padre assume il valore del PID del figlio, non del proprio PID. L'opzione B è errata perché nel figlio `pid` vale sempre `0`, non il PID del padre. L'opzione D è errata perché sebbene il codice venga eseguito da due processi in cui la variabile assume valori diversi, all'interno del *singolo* processo padre la variabile assume un unico valore statico (il PID del figlio)."
  },
  {
    "id": 1059,
    "topic": "Gestione dei Processi",
    "question": "Quale delle seguenti affermazioni sui processi Linux è vera?",
    "options": [
      "Il process control block mantiene le informazioni essenziali di ogni processo, è mantenuto su disco e viene swappato in RAM quando il processo va in esecuzione",
      "Lo heap contiene i dati statici inizializzati ed alcune costanti d'ambiente",
      "Il text segment contiene le istruzioni da eseguire, e viene sempre mantenuto interamente in RAM",
      "Nessuna delle altre opzioni è vera",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Analizziamo le affermazioni relative alle regioni di memoria di un processo:\n\n- **Perché l'opzione D è corretta:** Tutte le altre affermazioni (A, B, C) sono tecnicamente false:\n  - L'opzione A è falsa perché il Process Control Block (PCB) è una struttura dati interna del kernel e risiede nella memoria RAM del kernel (non sul disco); non viene swappato sul disco come le normali pagine di memoria utente, poiché il kernel deve sempre potervi accedere per lo scheduling.\n  - L'opzione B è falsa perché lo heap contiene la memoria allocata dinamicamente a tempo di esecuzione (tramite `malloc` o `calloc`), mentre i dati statici inizializzati risiedono nel `data segment` e le variabili d'ambiente risiedono in una zona specifica subito sopra lo stack.\n  - L'opzione C è falsa perché il `text segment` (codice), sebbene debba essere in RAM per essere eseguito, può essere paginato e swappato su disco o caricato dinamicamente (on-demand paging) dal file eseguibile originale in caso di scarsità di memoria.\nQuindi, nessuna delle altre opzioni è vera (opzione D)."
  },
  {
    "id": 1060,
    "topic": "Sistemi Operativi II",
    "question": "Quale dei seguenti linguaggi non è mai stato usato per implementare Unix? (DUBBIO)",
    "options": [
      "L'assembler del PDP7",
      "Il B",
      "Il C",
      "Le altre risposte contengono tutte dei linguaggi usati per implementare Unix",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "La storia di Unix è strettamente legata all'evoluzione dei linguaggi di programmazione:\n\n- **Perché l'opzione D è corretta:** Tutte le risposte elencate (A, B, C) rappresentano linguaggi effettivamente utilizzati per scrivere Unix in vari momenti della sua evoluzione:\n  - Il primissimo prototipo di Unix (1969), scritto da Ken Thompson per il computer PDP-7, fu implementato interamente in linguaggio Assembly.\n  - Successivamente, Thompson creò il linguaggio B (un'evoluzione interpretata e senza tipi del BCPL), e riscrisse parti di Unix in B nel 1970.\n  - Nel 1972-1973, Dennis Ritchie creò il C come evoluzione compilata e tipata di B, e Unix fu interamente riscritto in C, garantedogli la portabilità storica.\nQuindi, tutte le risposte contengono linguaggi usati per implementare Unix (opzione D)."
  },
  {
    "id": 1061,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni è vera?",
    "options": [
      "Il file system di Linux è una foresta, ovvero un albero con più radici (una per ogni dispositivo fisico di memoria di massa collegato alla macchina, per esempio hard disk, chiave USB, CD, DVD, ...)",
      "Nel file system di Linux, ogni nodo interno è un file o una directory, mentre le foglie sono sempre directory",
      "Nel file system di Linux esistono anche directory (denominate virtuali) che non si trovano su nessun dispositivo fisico di memoria di massa",
      "Il file system di Linux è gerarchico, perchè per accedere ad un file occorre effettuare una chiamata di sistema al kernel",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Il filesystem di Linux è organizzato come un unico albero logico gerarchico.\n\n- **Perché l'opzione C è corretta:** Esistono directory virtuali (punti di mount di filesystem virtuali come `/proc`, `/sys`, `/dev` o `/run`) le cui informazioni non risiedono su alcun dispositivo di memoria di massa (hard disk o USB). Esse sono generate dinamicamente in memoria RAM direttamente dal kernel per esporre metadati sullo stato del sistema, dell'hardware e dei processi attivi.\n- **Perché le altre opzioni sono errate:** L'opzione A descrive il modello di Windows (foresta con più radici come `C:`, `D:`), mentre Linux ha una sola radice `/`. L'opzione B è errata perché le foglie dell'albero del filesystem possono essere file regolari, collegamenti simbolici o socket, non necessariamente directory. L'opzione D definisce in modo errato il motivo del termine 'gerarchico' (che descrive la struttura a livelli e sotto-directory, non la necessità di effettuare syscall)."
  },
  {
    "id": 1062,
    "topic": "Sistemi Operativi II",
    "question": "Il linguaggio C:",
    "options": [
      "Viene definito per la creazione del primo Sistema Operativo Unix",
      "Nasce negli anni 70 per sviluppare programmi portabili su diverse architetture hardware",
      "Nasce come linguaggio di programmazione proprietario per l'implementazione dei programmi sui sistemi DEC PDP-11",
      "Nasce negli anni 70 come evoluzione del linguaggio B",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Questo quesito riguarda la genesi del linguaggio C.\n\n- **Perché l'opzione D è corretta:** Il C è stato sviluppato nei primi anni '70 da Dennis Ritchie come evoluzione diretta del linguaggio B (scritto da Ken Thompson), introducendo principalmente la gestione dei tipi di dato e la generazione di codice macchina compilato per l'architettura PDP-11.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché il primo Unix fu scritto in Assembly e B; il C fu creato successivamente per riscriverlo. L'opzione B è errata perché sebbene la portabilità sia stata una conseguenza fondamentale, lo scopo iniziale era la programmazione di sistema su PDP-11. L'opzione C è errata perché il C è sempre stato un linguaggio con specifiche aperte, non un linguaggio proprietario della DEC."
  },
  {
    "id": 1063,
    "topic": "Sistemi Operativi II",
    "question": "Quali tra le seguenti affermazioni è vera?",
    "options": [
      "cat -N -6 filename stampa le ultime 6 righe del file filename",
      "tail -c n filename stampa le ultime n righe del file filename",
      "cut consente di tagliare un file in gruppi di righe contigue in base a un carattere di spaziatura",
      "nessuna delle altre risposte è vera",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Analizziamo i comandi di manipolazione testuale in Linux:\n\n- **Perché l'opzione D è corretta:** Nessuna delle opzioni A, B, C è vera:\n  - L'opzione A è errata perché il comando `cat` non supporta l'opzione `-N` o `-6` per mostrare le ultime righe (per quello si usa `tail`).\n  - L'opzione B è errata perché l'opzione `-c` di `tail` indica di stampare gli ultimi `n` *byte* (caratteri), non le ultime `n` *righe* (per le righe si usa l'opzione `-n`).\n  - L'opzione C è errata perché `cut` consente di tagliare parti di *ciascuna riga* (colonne o campi) in base a un delimitatore, ma non taglia il file in gruppi di righe contigue (per quello si usa `split`).\nQuindi, nessuna delle altre risposte è vera (opzione D)."
  },
  {
    "id": 1064,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle applicazioni client-server realizzate tramite socket è vera?",
    "options": [
      "Il client deve sempre chiamare la syscall bind",
      "Il server deve chiamare la syscall connect",
      "Il client deve sempre chiamare la syscall listen",
      "Sia il server che il client devono sempre chiamare la syscall socket",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Le socket POSIX forniscono l'interfaccia per la comunicazione di rete client-server.\n\n- **Perché l'opzione D è corretta:** Indipendentemente dal ruolo svolto (se client che avvia la connessione o server che attende connessioni), entrambe le applicazioni devono obbligatoriamente creare un'istanza di socket chiamando inizialmente la system call `socket(2)`.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché la chiamata `bind(2)` (che associa un indirizzo/porta locale alla socket) è tipicamente obbligatoria per il server, ma opzionale per il client (se il client non la chiama, il kernel gli assegna automaticamente una porta effimera libera). L'opzione B è errata perché è il client che deve chiamare `connect(2)` per connettersi, mentre il server chiama `accept(2)`. L'opzione C è errata perché la chiamata `listen(2)` (che mette la socket in ascolto per connessioni entranti) deve essere invocata solo dal server."
  },
  {
    "id": 1065,
    "topic": "Sistemi Operativi II",
    "question": "Si supponga di voler scrivere un programma immune al CTRL+C. Quali dei seguenti frammenti di codice realizza quanto detto sopra?",
    "options": [
      "signal( SIGTERM, SIG_DFL);",
      "signal( SIGINT, SIG_DFL);",
      "signal( SIGINT, SIG_IGN);",
      "Non è possibile essere immuni al CTRL+C",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "La combinazione di tasti `CTRL+C` nel terminale invia il segnale `SIGINT` (Signal Interrupt) a tutti i processi in foreground.\n\n- **Perché l'opzione C è corretta:** Per rendere un programma immune a questa interruzione, si può associare al segnale `SIGINT` l'azione speciale `SIG_IGN` (Signal Ignore) tramite la funzione `signal(SIGINT, SIG_IGN)` (o preferibilmente `sigaction`). Questo istruisce il kernel a scartare silenziosamente il segnale senza consegnarlo al processo e senza provocarne la terminazione.\n- **Perché le altre opzioni sono errate:** L'opzione A associa `SIG_DFL` (comportamento di default) a `SIGTERM`. L'opzione B ripristina il comportamento di default per `SIGINT` (che consiste nella terminazione del processo). L'opzione D è falsa perché è possibilissimo essere immuni al `CTRL+C` (solo `SIGKILL` e `SIGSTOP` non possono essere ignorati o intercettati)."
  },
  {
    "id": 1066,
    "topic": "Sistemi Operativi II",
    "question": "Quale dei seguenti frammenti di codice è corretto?",
    "options": [
      "int pid = fork(); if (pid == 0) { /* fai qualcosa, sei il figlio */} else if (pid > 0) { /* fai qualcosa, sei il padre */} else { perror(\"fork failed\"); }",
      "int pid = fork(); if (pid == 0) { /* fai qualcosa, sei il padre */} else if (pid > 0) { /* fai qualcosa, sei il figlio */} else { perror(\"fork failed\"); }",
      "int pid = fork(); if (pid < 0) { /* fai qualcosa, sei il figlio */} else if (pid > 0) { /* fai qualcosa, sei il padre */} else { perror(\"fork failed\"); }",
      "Tutte le altre opzioni sono sbagliate",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "La corretta gestione del valore di ritorno della `fork()` prevede tre rami decisionali:\n```c\nint pid = fork();\nif (pid == 0) { /* codice figlio */ }\nelse if (pid > 0) { /* codice padre */ }\nelse { /* errore fork < 0 */ }\n```\n\n- **Perché l'opzione A è corretta:** Segue esattamente questa logica: se `pid == 0` siamo nel contesto del figlio; se `pid > 0` siamo nel contesto del padre (la variabile contiene il PID del figlio); se `pid < 0` (generalmente `-1`) si è verificato un errore e la fork è fallita.\n- **Perché le altre opzioni sono errate:** L'opzione B scambia le identità del padre e del figlio (asserendo erroneamente che `pid == 0` sia il padre). L'opzione C inverte il controllo degli errori, asserendo che `pid < 0` sia l'esecuzione normale del figlio."
  },
  {
    "id": 1067,
    "topic": "Sistemi Operativi II",
    "question": "Si supponga di voler avere in esecuzione in background i comandi cmd1 e cmd2. Quale dei seguenti modi è corretto?",
    "options": [
      "cmd1 #premere Ctrl+Z bg cmd2 #premere Ctrl+Z bg",
      "cmd1 #premere Ctrl+Z fg cmd2 #premere Ctrl+Z fg",
      "cmd1 #premere Ctrl+Z bg cmd2 #premere Ctrl+Z",
      "cmd1 #premere Ctrl+Z cmd2 #premere Ctrl+Z fg",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Per avviare o spostare comandi in background in modo interattivo da terminale:\n1. Si avvia il comando in foreground (es. `cmd1`).\n2. Si sospende il comando premendo la combinazione `CTRL+Z` (che invia `SIGTSTP`, mettendo il processo in stato Stopped).\n3. Si digita il comando built-in `bg` per riprendere l'esecuzione del processo sospeso, ma in background.\n\n- **Perché l'opzione A è corretta:** Segue fedelmente questa sequenza per entrambi i comandi: avvia `cmd1`, lo sospende con `Ctrl+Z`, lo manda in background con `bg`, poi avvia `cmd2`, lo sospende con `Ctrl+Z` e lo manda in background con `bg`.\n- **Perché le altre opzioni sono errate:** L'opzione B usa `fg` che riporterebbe il processo in foreground bloccando nuovamente il terminale. L'opzione C e D non usano `bg` per il secondo o primo comando, lasciandolo nello stato sospeso (Stopped) anziché in esecuzione in background."
  },
  {
    "id": 1068,
    "topic": "Gestione della Memoria Dinamica",
    "question": "Ignorando eventuali memory leaks, quale dei seguenti frammenti di codice può portare ad un segmentation fault?",
    "options": [
      "char *p = malloc(10*sizeof(char)); p[1] = 'a'; free(p);",
      "char *p = malloc(10*sizeof(char)); p[9] = 'a'; p = NULL; p = realloc(p, 10*sizeof(char)); free(p);",
      "char *p = calloc(10, sizeof(char)); p[9] = 'a'; p = realloc(p, 10*sizeof(char)); free(p);",
      "char *p = calloc(10, sizeof(char)); p[9] = 'a'; free(p); p = realloc(p, 10*sizeof(char)); free(p);",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "Un Segmentation Fault si verifica quando un processo tenta di accedere a un'area di memoria a cui non ha i permessi di accesso (es. puntatori non inizializzati, deferenziazione di puntatori nulli o memoria già deallocata).\n\n- **Perché l'opzione D è corretta:** Nel frammento D, viene eseguita la deallocazione della memoria puntata da `p` tramite `free(p)`:\n```c\nchar *p = calloc(10, sizeof(char));\np[9] = 'a';\nfree(p);\np = realloc(p, 10*sizeof(char));\n```\nDopo la chiamata `free(p)`, il puntatore `p` diventa un puntatore pendente (dangling pointer) che fa riferimento a una zona di memoria non più allocata al processo. La successiva chiamata a `realloc(p, ...)` tenta di riallocare o accedere a questa memoria ormai liberata. Questo comportamento non è definito dallo standard (use-after-free) e l'allocatore di memoria può rilevare la corruzione dello heap o tentare di accedere a pagine di memoria non più valide, provocando un arresto immediato per Segmentation Fault (o errore interno di malloc).\n- **Perché le altre opzioni sono errate:** Nei casi A, B e C, la memoria viene manipolata quando è ancora regolarmente allocata. In particolare in B, impostare `p = NULL` prima di fare `realloc(p, ...)` equivale a invocare una `malloc`, il che è un'operazione sicura e definita dallo standard."
  },
  {
    "id": 1069,
    "topic": "System Call e File",
    "question": "Si supponga di avere il seguente frammento di codice ed il seguente file. Quale dei seguenti frammenti di codice ha lo stesso effetto? (immagina fare questa domanda in 45 secondi)\n\n```c\nframmento:\nFILE *stream = fopen(\"file_esistente.txt\", \"r\");\nint var;\ndouble var2;\nfscanf(stream, \"%d\\n%lf\\n\", &var, &var2);\n\nfile_esistente.txt:\n4567\n34.56\n```",
    "options": [
      "int fd = open(\"file_esistente.txt\", O_RDONLY); int var; double var2; char *buf = calloc(sizeof(var2) > sizeof(var)? sizeof(var2) : sizeof(var), sizeof(char)); read(fd, buf, sizeof(var)); var = atoi(buf); read(fd, buf, sizeof(var2)); var2 = atof(buf);",
      "int fd = open(\"file_esistente.txt\", O_RDONLY); int var; double var2; read(fd, &var, sizeof(var)); read(fd, &var2, sizeof(var2));",
      "int fd = open(\"file_esistente.txt\", O_RDONLY); int var; double var2; char buf[4]; read(fd, buf, sizeof(var)); var = atoi(buf); read(fd, buf, sizeof(var2)); var2 = atof(buf);",
      "int fd = open(\"file_esistente.txt\", O_RDONLY); int var; double var2; fscanf(fd, \"%d\\n%lf\\n\", &var, &var2);",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Questo quesito richiede di tradurre una lettura formattata ad alto livello (`fscanf`) in chiamate a basso livello (`read` su file descriptor).\nIl file contiene due righe testuali:\n```\n4567\n34.56\n```\n- La prima riga contiene 4 caratteri numerici (`4567`) più un carattere a capo (`\\n`).\n- La seconda riga contiene 5 caratteri (`34.56`) più un carattere a capo (`\\n`).\n\n- **Perché l'opzione A è corretta:** Analizziamo il codice dell'opzione A:\n  - `char *buf = calloc(sizeof(var2) > sizeof(var) ? sizeof(var2) : sizeof(var), sizeof(char))` alloca dinamicamente un buffer di `sizeof(double)` (8 byte), che è sufficientemente grande per contenere le letture.\n  - `read(fd, buf, sizeof(var))` legge `sizeof(int)` (4 byte) dal file. Legge quindi i primi 4 caratteri del file (`\"4567\"`). La funzione `var = atoi(buf)` converte correttamente questa stringa nell'intero `4567`.\n  - La successiva `read(fd, buf, sizeof(var2))` legge `sizeof(double)` (8 byte). La lettura parte da dove era rimasta (il quinto byte, che è `\\n`), leggendo `\\n34.56\\n`. La funzione `var2 = atof(buf)` converte con successo questa stringa nel valore in virgola mobile `34.56` (le funzioni di conversione numerica standard come `atof` o `strtod` ignorano automaticamente i caratteri di spaziatura e andata a capo iniziali).\n- **Perché le altre opzioni sono errate:** L'opzione B tenta di leggere direttamente i byte in modalità binaria (`&var`); poiché il file è testuale e non binario, `var` conterrà i valori ASCII dei caratteri reinterpretati in intero, non il numero 4567. L'opzione C usa un buffer di dimensione fissa di 4 caratteri (`char buf[4]`), il che causa un buffer overflow distruttivo quando si tenta di leggervi 8 byte (`sizeof(var2)`).\nL'opzione D chiama `fscanf` passando come primo argomento `fd` (un intero), il che causa un errore poiché `fscanf` richiede un puntatore `FILE *`."
  },
  {
    "id": 1070,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Si supponga di avere il seguente frammento di codice. Quale dei seguenti frammenti di codice ha lo stesso effetto? (immagina fare questa domanda in 45 secondi)\n\n```c\nint var = somefunction1();\ndouble var2 = somefunction2();\nfprintf(stdout, \"%d\\n%lf\\n\", var, var2);\n```",
    "options": [
      "int var = somefunction1(); double var2 = somefunction2(); write(1, (char *)&var, sizeof(var)); write(1, (char *)&var2, sizeof(var2));",
      "int var = somefunction1(); double var2 = somefunction2(); char *buf = calloc(sizeof(var2) > sizeof(var) ? sizeof(var2) : sizeof(var), sizeof(char)); sprintf(buf, \"%d\\n\", var); write(1, buf, sizeof(var) + 1); sprintf(buf, \"%lf\\n\", var2); write(1, buf, sizeof(var2) + 1);",
      "int var = somefunction1(); double var2 = somefunction2(); char *buf = calloc(sizeof(var2) > sizeof(var)? sizeof(var2) : sizeof(var), sizeof(char)); sprintf(buf, \"%d\", var); write(1, buf, sizeof(var)); write(1, \"\\n\", 1); sprintf(buf, \"%lf\", var2); write(1, buf, sizeof(var2)); write(1, \"\\n\", 1);",
      "int var = somefunction1(); double var2 = somefunction2(); char buf[4]; sprintf(buf, \"%d\", var); write(1, buf, sizeof(var)); write(1, \"\\n\", 1); sprintf(buf, \"%lf\", var2); write(1, buf, sizeof(var2)); write(1, \"\\n\", 1);",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito richiede di convertire una stampa formattata di variabili `int` e `double` da `fprintf` ad alto livello a chiamate a basso livello `write`.\n\n- **Perché l'opzione C è corretta:** Per scrivere i dati sullo Standard Output tramite `write(1, ...)`:\n  - Bisogna prima convertire le variabili in stringhe testuali tramite la funzione `sprintf(buf, ...)`.\n  - Per la variabile `var` (intero), `sprintf(buf, \"%d\", var)` scrive la stringa in `buf`. Quindi `write(1, buf, sizeof(var))` scrive sul terminale un numero di byte pari a `sizeof(var)` (4 byte), seguito dalla scrittura del carattere di nuova riga `write(1, \"\\n\", 1)`.\n  - Per la variabile `var2` (double), `sprintf(buf, \"%lf\", var2)` effettua la conversione, seguita dalle chiamate a `write` analoghe.\nIl buffer viene correttamente dimensionato dinamicamente con `calloc` in base al tipo più grande.\n- **Perché le altre opzioni sono errate:** L'opzione A tenta di scrivere direttamente i byte in formato binario (`(char *)&var`), il che produrrà caratteri illeggibili sul terminale invece delle cifre decimali. L'opzione B tenta di includere il carattere `\\n` nella `sprintf`, ma poi scrive `sizeof(var) + 1` byte; poiché in C `sizeof(var)` è la dimensione del tipo intero (4) e non la lunghezza reale della stringa convertita, questo provocherà stampe di byte spazzatura o troncamenti. L'opzione D alloca un array statico di soli 4 caratteri (`char buf[4]`), il che causerà un grave buffer overflow quando si tenta di memorizzare la stringa di conversione di un `double` (che richiede molti più caratteri)."
  },
  {
    "id": 1071,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sulle syscall di Linux che riguardano i files è falsa?",
    "options": [
      "La syscall chdir ha l'effetto di cambiare l'esecuzione delle sole chiamate ad open che usano path relativi come primo argomento",
      "La syscall chdir(path) ha lo stesso effetto del comando bash cd path lanciato in una sottoshell",
      "La syscall rename(oldpath, newpath) ha lo stesso effetto del comando bash cp oldpath newpath",
      "La syscall chroot ha l'effetto di cambiare l'esecuzione delle sole chiamate ad open che usano path assoluti come primo argomento",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito analizza gli effetti di alcune system call relative ai file e alle directory.\n\n- **Perché l'opzione C è corretta (ovvero è l'affermazione FALSA):** La system call `rename(oldpath, newpath)` sposta o rinomina un file o una directory all'interno del filesystem (operazione equivalente al comando bash `mv`). Essa *non* si comporta come il comando bash `cp` (che effettua una copia fisica lasciando il file originale intatto); `rename` rimuove il vecchio collegamento dopo aver creato il nuovo.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A e D descrivono correttamente come `chdir` (cambia directory corrente) influenzi i soli percorsi relativi (poiché i percorsi assoluti ripartono sempre dalla radice logica) e come `chroot` (cambia la radice logica `/`) influenzi i soli percorsi assoluti. L'opzione B è vera perché `cd` lanciato in una sottoshell non influisce sulla shell madre, proprio come `chdir` chiamata da un processo figlio non modifica la directory di lavoro del processo padre."
  },
  {
    "id": 1072,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti affermazioni sul comando find è falsa?",
    "options": [
      "È possibile restringere la ricerca ai soli file che sono link simbolici",
      "È obbligatorio che gli starting point siano delle directory",
      "È possibile cercare nomi di file che rispettino un dato pattern o una data regular expression",
      "È possibile cercare anche directory, e non solo file",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il comando `find` viene utilizzato per cercare file all'interno di una gerarchia di directory.\n\n- **Perché l'opzione B è corretta (ovvero è l'affermazione FALSA):** Il comando `find` *not* richiede obbligatoriamente che gli starting point (i percorsi di partenza) siano delle directory. È perfettamente lecito passare come punto di partenza un file regolare (es. `find myfile.txt -name 'myfile*'`); in tal caso `find` si limiterà a controllare quel singolo file.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A è vera perché si può limitare la ricerca ai link simbolici usando l'opzione `-type l`. L'opzione C è vera perché si possono cercare pattern con `-name` o `-regex`. L'opzione D è vera perché si possono cercare directory usando `-type d`."
  },
  {
    "id": 1073,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Si supponga di avere il seguente frammento di codice, dove somefunction ritorna un intero. Quale dei seguenti frammenti di codice scrive gli stessi caratteri sullo stdout, senza errori? (immagina fare questa domanda in 45 secondi)\n\n```c\nint var = somefunction()%100;\nprintf(\"%d\\n%.2lf\\n\", var, (double)var);\n```",
    "options": [
      "int var = somefunction()%100; char *buf = (char *)calloc(sizeof(int), sizeof(char)); sprintf(buf, \"%d\", var); write(1, buf, strlen(buf)); write(1, \"\\n\", 1); sprintf(buf, \"%.2lf\", (double)var); write(1, buf, strlen(buf)); write(1, \"\\n\", 1); free(buf);",
      "int var = somefunction()%100; double var2 = (double)var; write(1, (char *)&var, sizeof(var)); write(1, (char *)&var2, sizeof(var2));",
      "int var = somefunction()%100; char buf[7]; sprintf(buf, \"%d\", var); write(1, buf, strlen(buf)); write(1, \"\\n\", 1); sprintf(buf, \"%.2lf\", (double)var); write(1, buf, strlen(buf)); write(1, \"\\n\", 1);",
      "int var = somefunction()%100; char *buf; sprintf(buf, \"%d\", var); write(1, buf, strlen(buf)); write(1, \"\\n\", 1); sprintf(buf, \"%.2lf\", (double)var); write(1, buf, strlen(buf)); write(1, \"\\n\", 1);",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Il codice ad alto livello stampa un intero `var` (compreso tra 0 e 99 a causa dell'operatore `%100`) e successivamente lo stesso valore convertito in `double` con due cifre decimali (`%.2lf`), ciascuno seguito da andata a capo.\n\n- **Perché l'opzione C è corretta:** Analizziamo l'opzione C:\n  - `char buf[7]` alloca un array statico di 7 caratteri. Questo spazio è perfettamente sufficiente: l'intero `var` (max 2 cifre più terminatore) richiede 3 byte; il double `var.00` (max 5 caratteri, es. `99.00` più terminatore) richiede 6 byte.\n  - Viene usata `strlen(buf)` come dimensione nelle chiamate a `write`. Questo è corretto e sicuro perché `strlen` restituisce il numero esatto di caratteri effettivamente scritti da `sprintf` nel buffer (escludendo il terminatore `'\\0'`), garantendo che vengano scritti solo i caratteri significativi sullo stdout.\n- **Perché le altre opzioni sono errate:** L'opzione A alloca dinamicamente `sizeof(int)` (4) byte per `buf`; questo è troppo piccolo per contenere la stringa del double `99.00` (che necessita di almeno 6 caratteri più il terminatore nullo), causando un buffer overflow nello heap. L'opzione B tenta di scrivere i dati grezzi in formato binario (`(char *)&var`). L'opzione D dichiara un puntatore `char *buf` senza allocare memoria (puntatore non inizializzato o selvaggio), il che provocherà un crash immediato per Segmentation Fault alla chiamata `sprintf`."
  },
  {
    "id": 1074,
    "topic": "Compilazione, Linkage e Preprocessore",
    "question": "Supponiamo di avere le seguenti variabili; quale delle seguenti espressioni è falsa?\n\n```c\nint x = 1, y = 7;\n```",
    "options": [
      "x & y == 7",
      "x | y == 7",
      "x || y == x & y",
      "nessuna delle precedenti",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 3,
    "explanation": "In linguaggio C, la precedenza degli operatori determina l'ordine in cui vengono valutate le espressioni. L'operatore di uguaglianza `==` ha una precedenza maggiore rispetto a quelli bit per bit (`&`, `|`) e logici (`&&`, `||`).\n\n- **Perché l'opzione D (nessuna delle precedenti) è corretta:** Tutte le opzioni A, B e C valutano a vero (true, valore 1):\n  - **Opzione A (`x & y == 7`):** Poiché `==` ha precedenza maggiore di `&`, viene valutata come `x & (y == 7)`. Sostituendo i valori, `1 & (7 == 7)` $\\rightarrow$ `1 & 1` $\\rightarrow$ `1` (vero).\n  - **Opzione B (`x | y == 7`):** Viene valutata come `x | (y == 7)`. Sostituendo, `1 | (7 == 7)` $\\rightarrow$ `1 | 1` $\\rightarrow$ `1` (vero).\n  - **Opzione C (`x || y == x & y`):** Viene valutata come `x || ((y == x) & y)`. Essendo `x == 1`, l'espressione logica a sinistra del cortocircuito `||` è già vera (`1`), quindi l'intera espressione valuta a `1` (vero).\nPoiché nessuna delle espressioni è falsa, l'affermazione corretta è \"nessuna delle precedenti\"."
  }
];
