const QUESTIONS = [
  {
    "id": 1,
    "topic": "Gestione Utenti",
    "question": "Che cosa si intende per sudoer nel gergo Linux?",
    "options": [
      "Un utente che appartiene al gruppo di utenti sudo",
      "Un gruppo che permette ai suoi membri di eseguire comandi come super-utente",
      "Nessuna risposta (0 punti)",
      "Un comando per essere aggiunti al gruppo sudo"
    ],
    "correct_index": 0,
    "explanation": "Un 'sudoer' è un utente configurato all'interno del file `/etc/sudoers` (o appartenente a un gruppo autorizzato come `sudo` o `wheel`) che ha il permesso di eseguire comandi con i privilegi di super-utente (root) o di un altro utente tramite il comando `sudo`.\n\n**Analisi delle opzioni:**\n- **Opzione A (Corretta):** Identifica correttamente il sudoer come l'utente che fa parte del gruppo sudo ed è quindi autorizzato.\n- **Opzione B (Errata):** Il termine 'sudoer' si riferisce all'utente stesso, non al gruppo.\n- **Opzione D (Errata):** `sudo` non è un comando per aggiungere utenti ai gruppi, ma per eseguire comandi con privilegi elevati. Per aggiungere utenti si usa `usermod` o `adduser`.\n- **Opzione C (Errata):** Essendo l'opzione A corretta, questa opzione non si applica."
  },
  {
    "id": 2,
    "topic": "Gestione Utenti",
    "question": "Si supponga che nel sistema esiste un gruppo \"studente\". Si supponga di voler creare \"utente1\" e di volerlo aggiungere al gruppo studente. Quale dei seguenti comandi e' corretto?",
    "options": [
      "adduser utente1 studente",
      "adduser utente1; adduser utente1 studente",
      "adduser utente1 utente1 studente",
      "nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Su sistemi Debian/Ubuntu, lo script `adduser` consente sia di creare nuovi utenti (se chiamato con un solo argomento come `adduser utente1`), sia di aggiungere un utente esistente a un gruppo (se chiamato con due argomenti come `adduser utente1 studente`). Pertanto, la sequenza corretta è creare prima l'utente e poi aggiungerlo al gruppo.\n\n**Analisi delle opzioni:**\n- **Opzione B (Corretta):** Esegue in sequenza la creazione dell'utente e il suo successivo inserimento nel gruppo.\n- **Opzione A (Errata):** Tenta di aggiungere l'utente al gruppo prima ancora che l'utente sia stato creato nel sistema, il che causerà un errore.\n- **Opzione C (Errata):** La sintassi `adduser utente1 utente1 studente` con tre argomenti non è valida e genera un errore di sintassi.\n- **Opzione D (Errata):** Essendo l'opzione B corretta, questa opzione non si applica."
  },
  {
    "id": 3,
    "topic": "System Call e File",
    "question": "Supponiamo di eseguire separatamente i seguenti frammenti di codice\n\n**Frammento_1**\n```c\nclose(2);\nif (fopen(\".\",\"r\")) {\n    perror(\"main\");\n}\n```\n\n**Frammento_2**\n```c\nclose(2);\nif (fopen(\".\",\"r\")) {\n    printf(\"main: %s \\n\", strerror(errno));\n}\n```\n\nQuale delle seguenti affermazioni e' vera?",
    "options": [
      "La loro esecuzione produce sul terminale due stringhe diverse",
      "Frammento_1 non produce alcun output sul terminale",
      "La loro esecuzione produce sul terminale due stringhe identiche",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il descrittore di file 2 corrisponde allo standard error (`stderr`). La chiamata `close(2)` chiude lo standard error per il processo corrente. La funzione di libreria `perror` scrive sempre l'output su `stderr`. Di conseguenza, nel Frammento_1, `perror` cercherà di scrivere su un descrittore chiuso e non produrrà alcun output sul terminale. Nel Frammento_2, invece, viene utilizzata `printf` che scrive su `stdout` (descrittore 1), il quale è ancora aperto, producendo quindi output sul terminale.\n\n**Analisi delle opzioni:**\n- **Opzione B (Corretta):** Il Frammento_1 non produce alcun output sul terminale perché scrive su stderr che è stato precedentemente chiuso con `close(2)`.\n- **Opzione A (Errata):** Non vengono prodotte due stringhe sul terminale, poiché il Frammento_1 non produce nulla.\n- **Opzione C (Errata):** Le stringhe non sono identiche in quanto il Frammento_1 non scrive nulla.\n- **Opzione D (Errata):** Essendo l'opzione B corretta, questa opzione non si applica."
  },
  {
    "id": 4,
    "topic": "Gestione Memoria Dinamica",
    "question": "Si considerino i seguenti frammenti di codice (R1 e R2)\n\n**R1**:\n```c\nstrPtr=(char *) calloc(SIZE_OF_ARRAY, sizeof(char) );\n```\n\n**R2**:\n```c\nstrPtr=(char *) malloc(SIZE_OF_ARRAY);\nmemset(strPtr, '\\0', SIZE_OF_ARRAY);\n```\n\nQuale delle seguenti affermazioni e' vera?",
    "options": [
      "R1 alloca nell'heap, e quindi dopo e' consigliabile \"pulire\" la memoria; mentre R2 alloca nello stack e quindi non c'è bisogno di \"pulire\" la memoria.",
      "Nessuna risposta (0 punti)",
      "R1 e R2 producono lo stesso risultato",
      "R2 dopo aver allocato la memoria la inizializza, mentre R1 no"
    ],
    "correct_index": 2,
    "explanation": "Sia `calloc` che `malloc` allocano memoria nell'heap. La funzione `calloc` alloca un'area di memoria e azzera tutti i bit allocati. Nel frammento R2, la `malloc` alloca la memoria e `memset` imposta esplicitamente a zero (`'\\0'`) tutti i byte allocati. Entrambi i frammenti ottengono lo stesso identico risultato finale: un blocco di memoria inizializzato a zero nell'heap.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** R1 e R2 producono lo stesso identico risultato.\n- **Opzione A (Errata):** Entrambi i frammenti allocheranno memoria nell'heap, non nello stack.\n- **Opzione D (Errata):** Sia R1 (tramite `calloc`) che R2 (tramite `memset` post-allocazione) inizializzano la memoria a zero.\n- **Opzione B (Errata):** Essendo l'opzione C corretta, questa opzione non si applica."
  },
  {
    "id": 5,
    "topic": "System Call e File",
    "question": "Assumiamo di voler impostare i permessi di accesso `0600` al file `filename` mediante l'uso della system call `open(2)`. Quale delle seguenti chiamate e' corretta?",
    "options": [
      "Nessuna risposta (0 punti)",
      "open(\"filename\", O_RDWR | O_CREAT, S_IRUSR | S_IWUSR);",
      "open(\"filename\", O_RDWR | O_CREAT | S_IRUSR | S_IWUSR);",
      "open(\"filename\", O_RDWR | O_CREAT, S_IRUSR & S_IWUSR);"
    ],
    "correct_index": 1,
    "explanation": "La system call `open` accetta i permessi di accesso (`mode`) come terzo argomento, che viene utilizzato solo se è specificato il flag `O_CREAT` (o `O_TMPFILE`). I permessi `0600` (ottale) equivalgono a lettura e scrittura solo per l'utente proprietario. In C, questi permessi si esprimono combinando le costanti simboliche `S_IRUSR` (lettura proprietario) e `S_IWUSR` (scrittura proprietario) con l'operatore bitwise OR (`|`).\n\n**Analisi delle opzioni:**\n- **Opzione B (Corretta):** Specifica correttamente i flag nel secondo argomento e i permessi corretti combinati con l'operatore OR bitwise come terzo argomento.\n- **Opzione C (Errata):** Tenta di combinare i permessi con i flag del secondo argomento, il che non è sintatticamente corretto per specificare i permessi del file.\n- **Opzione D (Errata):** Utilizza l'operatore AND bitwise (`&`) invece di OR (`|`), che produce una combinazione errata di permessi.\n- **Opzione A (Errata):** Essendo l'opzione B corretta, questa opzione non si applica."
  },
  {
    "id": 6,
    "topic": "Segnali",
    "question": "Quale dei seguenti segnali non può essere catturato e gestito dall'utente?",
    "options": [
      "Nessuna risposta (0 punti)",
      "SIGINT",
      "SIGKILL",
      "SIGABRT"
    ],
    "correct_index": 2,
    "explanation": "I segnali `SIGKILL` (segnale 9) e `SIGSTOP` (segnale 19) sono gestiti direttamente a livello kernel dal sistema operativo e non possono essere intercettati, catturati (tramite `signal` o `sigaction`), ignorati o bloccati da alcun processo utente. Ciò garantisce all'amministratore di sistema di poter sempre terminare o sospendere qualsiasi processo utente.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** `SIGKILL` non può essere catturato né gestito dall'utente.\n- **Opzione B (Errata):** `SIGINT` può essere catturato per eseguire cleanup personalizzati all'interruzione (Ctrl+C).\n- **Opzione D (Errata):** `SIGABRT` può essere catturato per consentire operazioni di debug o salvataggio dati prima che il processo termini.\n- **Opzione A (Errata):** Essendo l'opzione C corretta, questa opzione non si applica."
  },
  {
    "id": 7,
    "topic": "System Call e File",
    "question": "Si consideri la system call `int open(const char *pathname, int flags);` nel caso venga invocata con il flag impostato a `O_CREAT | O_EXCL | O_RDONLY` quale e' il comportamento atteso?",
    "options": [
      "Se il file non esiste lo crea e lo apre in lettura, altrimenti lo apre in lettura",
      "Nessuna risposta (0 punti)",
      "Se il file non esiste viene creato ed aperto in lettura, se invece esiste ritorna errore",
      "Se il file non esiste viene creato con i permessi di esecuzione (x) ed aperto in lettura. Se esiste vengono aggiunti i permessi di esecuzione se gia' non settati ed il file e' aperto in lettura"
    ],
    "correct_index": 2,
    "explanation": "L'uso combinato dei flag `O_CREAT` e `O_EXCL` con la system call `open` costringe la creazione esclusiva del file. Se il file non esiste, esso viene creato e aperto. Se invece il file esiste già sul filesystem, la system call fallisce immediatamente ritornando `-1` ed impostando `errno` a `EEXIST`.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** Descrive esattamente il comportamento della creazione esclusiva.\n- **Opzione A (Errata):** Se il file esiste, la chiamata non lo apre ma fallisce con un errore.\n- **Opzione D (Errata):** I permessi di esecuzione non vengono modificati né impostati automaticamente da `O_EXCL`.\n- **Opzione B (Errata):** Essendo l'opzione C corretta, questa opzione non si applica."
  },
  {
    "id": 8,
    "topic": "System Call e File",
    "question": "Si consideri la variabile globale `errno`. Se una system call termina con successo, e immediatamente dopo la sua terminazione ispezioniamo il contenuto di `errno`, cosa otteniamo?",
    "options": [
      "Il codice di terminazione (con successo) in quanto non c'è una effettiva differenza tra codice di errore o di terminazione con successo",
      "Il codice di errore generato dall'ultima system call o funzione di libreria la cui esecuzione e' terminata con errore",
      "Il valore zero essendo la system call terminata con successo",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "La variabile globale `errno` viene impostata con il codice di errore appropriato solo quando una system call o una funzione di libreria fallisce. Se una chiamata ha successo, essa NON azzera né modifica il valore di `errno`. Pertanto, dopo una chiamata di successo, `errno` conterrà ancora il codice dell'ultimo errore verificatosi in precedenza.\n\n**Analisi delle opzioni:**\n- **Opzione B (Corretta):** Ritorna l'ultimo codice di errore generato da una chiamata fallita prima di quella corrente.\n- **Opzione C (Errata):** `errno` non viene resettata a zero in caso di successo.\n- **Opzione A (Errata):** Non esiste un codice di 'terminazione con successo' registrato in `errno`.\n- **Opzione D (Errata):** Essendo l'opzione B corretta, questa opzione non si applica."
  },
  {
    "id": 9,
    "topic": "System Call e File",
    "question": "Quale attributi di un processo sono ereditati dal processo figlio?",
    "options": [
      "Nessuna risposta (0 punti)",
      "timer, lock, coda dei segnali",
      "working directory, descrittori dei file, memoria condivisa",
      "parent pid, timer, contatori risorse"
    ],
    "correct_index": 2,
    "explanation": "Il processo figlio creato tramite `fork` eredita una copia dello stato del padre, inclusa la directory di lavoro corrente (`working directory`), la tabella dei descrittori di file aperti (che puntano alle stesse descrizioni di file aperte nel kernel, condividendo file offset e flag) e i segmenti di memoria condivisa.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** Elenca attributi correttamente ereditati dal figlio.\n- **Opzione B (Errata):** I lock sui file (fcntl) e i timer pendenti non vengono ereditati dal figlio.\n- **Opzione D (Errata):** Il PID del genitore (parent pid) del figlio è il PID del processo che ha chiamato `fork`, non viene 'ereditato' il parent pid del padre. Inoltre, i timer e i contatori risorse non vengono ereditati.\n- **Opzione A (Errata):** Essendo l'opzione C corretta, questa opzione non si applica."
  },
  {
    "id": 10,
    "topic": "System Call e File",
    "question": "Quale dei seguenti attributi di processo è preservato dalla system call `execve(2)`?",
    "options": [
      "Memory locks",
      "Nessuna risposta (0 punti)",
      "Umask",
      "Timers"
    ],
    "correct_index": 2,
    "explanation": "La system call `execve` sostituisce l'immagine del processo corrente con quella di un nuovo programma. Durante questa operazione, la maschera di creazione dei file (`umask`), il PID, il PPID e la directory di lavoro corrente vengono preservati. I gestori dei segnali personalizzati vengono resettati all'azione di default, e i memory lock e i timer pendenti vengono cancellati.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** La maschera di creazione dei file (`umask`) è preservata dopo l'esecuzione di `execve`.\n- **Opzione A (Errata):** I memory locks non vengono preservati dopo una `execve`.\n- **Opzione D (Errata):** I timer pendenti non vengono preservati.\n- **Opzione B (Errata):** Essendo l'opzione C corretta, questa opzione non si applica."
  },
  {
    "id": 11,
    "topic": "Programmazione Concorrente",
    "question": "Si consideri il seguente frammento di codice (i numeri a lato sono i numeri di riga delle istruzioni)\n```\n1. pthread_t tid;\n2. pthread_create(&tid, ... )\n3. pthread_create(&tid, ... )\n4. pthread_join(tid, ...);\n5. printf(\"joined\");\n```\nQuale delle seguenti affermazioni e' falsa?",
    "options": [
      "La chiamata pthread_join(...) attende la terminazione del thread con identificatore tid",
      "La stringa \"joined\" e' inviata su stdout solo quando il thread creato a riga 3. e' terminato",
      "Nessuna risposta (0 punti)",
      "La stringa \"joined\" e' inviata su stdout quando entrambi i thread sono terminati"
    ],
    "correct_index": 3,
    "explanation": "Nel codice, la variabile `tid` viene utilizzata per memorizzare l'identificatore del thread. Alla riga 3, la chiamata `pthread_create` sovrascrive il valore di `tid` con quello del secondo thread creato. Quando viene eseguita `pthread_join(tid, ...)`, il programma attende esclusivamente la terminazione del thread il cui ID è attualmente memorizzato in `tid` (ovvero il secondo thread). La stringa 'joined' verrà stampata non appena il secondo thread termina, anche se il primo thread è ancora in esecuzione. Perciò, l'affermazione 'La stringa joined è inviata su stdout quando entrambi i thread sono terminati' è FALSA.\n\n**Analisi delle opzioni:**\n- **Opzione D (Corretta come risposta da selezionare - in quanto FALSA):** La stringa 'joined' viene stampata quando termina il secondo thread, indipendentemente dal primo.\n- **Opzione A (Vera, non da selezionare):** `pthread_join` attende effettivamente la terminazione del thread indicato.\n- **Opzione B (Vera, non da selezionare):** Essendo `tid` il secondo thread (riga 3), la join attende quello prima di procedere.\n- **Opzione C (Errata):** Essendo l'opzione D falsa, essa costituisce la risposta esatta."
  },
  {
    "id": 12,
    "topic": "Gestione Memoria Dinamica",
    "question": "Si consideri il seguente frammento di codice:\n```c\nchar **mptr, *ptr1;\nint i;\nmptr = calloc(10, sizeof(char *));\nfor(i=0;i<10;i++){\n   mptr[i]=(char *)malloc(10);\n}\n```\nQuale delle seguenti risposte è esatta?",
    "options": [
      "Nessuna risposta (0 punti)",
      "for(i=0;i<10;i++) free(mptr[i]); dealloca correttamente tutta la memoria",
      "Sia (b) sia (d) creano un memory leakage",
      "free(mptr) dealloca correttamente tutta la memoria"
    ],
    "correct_index": 2,
    "explanation": "La matrice è allocata dinamicamente come un array di puntatori (`mptr`), ciascuno dei quali punta a un array di caratteri. Per liberare correttamente tutta la memoria ed evitare memory leak, è necessario fare un ciclo `free(mptr[i])` per rilasciare la memoria di ogni riga, e infine chiamare `free(mptr)` per liberare l'array di puntatori principale. Di conseguenza:\n- Il solo ciclo `free(mptr[i])` (opzione B) lascia allocato il puntatore principale `mptr`.\n- La sola chiamata `free(mptr)` (opzione D) rende irraggiungibili i blocchi delle singole righe, lasciandoli allocati.\nEntrambi i metodi parziali generano memory leak, rendendo l'opzione C la risposta esatta.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** Entrambe le opzioni B e D causano memory leakage se eseguite da sole.\n- **Opzione B (Errata in sé):** Non dealloca l'array di puntatori principale `mptr`.\n- **Opzione D (Errata in sé):** Non dealloca le singole righe prima di deallocare l'array principale, lasciandole orfane in memoria.\n- **Opzione A (Errata):** Essendo la C corretta, questa opzione non si applica."
  },
  {
    "id": 13,
    "topic": "System Call e File",
    "question": "Si consideri la system call `int open(const char *pathname, int flags);` nel caso venga invocata con il flag impostato a `O_CREAT | O_EXCL | O_WRONLY` qual è il comportamento atteso?",
    "options": [
      "Nessuna risposta (0 Punti)",
      "Se il file non esiste viene creato ed aperto in scrittura, se invece esiste ritorna errore",
      "Se il file non esiste lo crea e lo apre in scrittura, altrimenti lo apre in lettura",
      "Se il file non esiste viene creato con i permessi di esecuzione (x) ed aperto in scrittura. Se esiste vengono aggiunti i permessi di esecuzione se gia' non settati ed il file e' aperto in scrittura"
    ],
    "correct_index": 1,
    "explanation": "La combinazione di flag `O_CREAT | O_EXCL` garantisce la creazione esclusiva del file: se il file esiste già sul filesystem, la system call `open` fallisce immediatamente ritornando `-1` ed impostando `errno` a `EEXIST`. Se il file non esiste, lo crea e lo apre in sola scrittura (`O_WRONLY`).\n\n**Analisi delle opzioni:**\n- **Opzione B (Corretta):** Crea il file in scrittura se non esiste, altrimenti ritorna un errore.\n- **Opzione C (Errata):** Se il file esiste, non lo apre in lettura ma fallisce immediatamente.\n- **Opzione D (Errata):** Non vengono gestiti o forzati permessi speciali di esecuzione da questi flag.\n- **Opzione A (Errata):** Essendo la B corretta, questa opzione non si applica."
  },
  {
    "id": 14,
    "topic": "System Call e File",
    "question": "Consideriamo queste due line di codice:\n1. `printf(\"main:%s\\n\", strerror(errno));`\n2. `perror(\"main\");`\nQuali delle seguenti affermazioni e' corretta?",
    "options": [
      "Inviano la stessa stringa su stdout",
      "Producono stringhe diverse e la prima la invia su stdout mentre la seconda su stderr.",
      "Nessuna risposta (0 Punti)",
      "Producono la stessa stringa ma la 1 la invia su stdout, mentre la 2 su stderr"
    ],
    "correct_index": 3,
    "explanation": "Entrambe le istruzioni stampano lo stesso messaggio di errore, composto dal prefisso specificato ('main') seguito dalla descrizione testuale dell'errore memorizzato in `errno`. La differenza risiede nel canale di output utilizzato: `printf` (riga 1) scrive sullo standard output (`stdout`), mentre `perror` (riga 2) scrive per specifica sullo standard error (`stderr`).\n\n**Analisi delle opzioni:**\n- **Opzione D (Corretta):** Specifica correttamente che entrambe producono lo stesso messaggio ma lo inviano a flussi differenti (stdout vs stderr).\n- **Opzione A (Errata):** `perror` invia a stderr, non a stdout.\n- **Opzione B (Errata):** I messaggi prodotti non sono differenti ma identici in contenuto.\n- **Opzione C (Errata):** Essendo la D corretta, questa opzione non si applica."
  },
  {
    "id": 15,
    "topic": "System Call e File",
    "question": "Sia mylink un hard link al file myfile (prodotto dal comando: ln myfile mylink). Quale di queste affermazioni e' vera?",
    "options": [
      "myfile e mylink hanno un diverso numero di inode",
      "myfile e mylink hanno dimensione diversa",
      "myfile e mylink hanno lo stesso numero di inode",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Un hard link (creato con `ln myfile mylink`) è un riferimento alternativo (un nuovo nome) allo stesso inode sul filesystem. Di conseguenza, `myfile` e `mylink` condividono lo stesso identico inode, gli stessi metadati (permessi, proprietario, timestamp) e lo stesso contenuto fisico su disco.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** Condividono lo stesso numero di inode sul filesystem.\n- **Opzione A (Errata):** Hanno lo stesso numero di inode, non uno diverso.\n- **Opzione B (Errata):** Hanno la stessa dimensione poiché puntano agli stessi blocchi di dati.\n- **Opzione D (Errata):** Essendo la C corretta, questa opzione non si applica."
  },
  {
    "id": 16,
    "topic": "Segnali",
    "question": "Assumiamo di avere due shell aperte, etichettate come shell_1 e shell_2 e supponiamo di eseguire la sequenza di comandi che segue (shell_i: cmd indica che cmd e' eseguito nella shell_i, i=1,2).\n\n```bash\nshell_1: xterm\nshell_2: ps -C xterm #restituisce xtermPID\nshell_2: kill -s SIGSTOP xtermPID\nshell_2: kill -s SIGCONT xtermPID\n```\n\nQuale e' il loro effetto sul processo xterm?",
    "options": [
      "Il processo xterm viene prima mandato in esecuzione in background e poi riportato in foreground",
      "Il processo xterm viene mandato in esecuzione in background",
      "Nessuna risposta (0 punti)",
      "Il processo xterm viene prima portato nello stato stopped (T) e poi mandato nuovamente in esecuzione (esecuzione in foreground)"
    ],
    "correct_index": 3,
    "explanation": "Il segnale `SIGSTOP` sospende l'esecuzione del processo xterm portandolo nello stato Stopped (T). Il successivo segnale `SIGCONT` riprende l'esecuzione del processo. Poiché il processo xterm è stato avviato in foreground sulla shell_1, esso riprenderà l'esecuzione sempre in foreground su quella stessa shell.\n\n**Analisi delle opzioni:**\n- **Opzione D (Corretta):** Il processo viene fermato e poi riprende in foreground.\n- **Opzione A e B (Errate):** I segnali non spostano il processo in background (sarebbe necessario usare comandi di controllo dei job come `bg` o `&`).\n- **Opzione C (Errata):** Essendo la D corretta, questa opzione non si applica."
  },
  {
    "id": 17,
    "topic": "System Call e File",
    "question": "Si supponga di avere un file di testo (filein) contenente 1000 caratteri e di voler copiare in un altro file (fileout) 100 caratteri a partire dal decimo. Quale di questi comandi non produce il risultato atteso?",
    "options": [
      "dd if=filein of=fileout bs=10 skip=1 count=10",
      "Nessuna risposta (0 punti)",
      "dd if=filein of=fileout bs=1 skip=10 count=100",
      "dd if=filein of=fileout bs=1 seek=10 count=100"
    ],
    "correct_index": 3,
    "explanation": "L'opzione `seek=10` dice a `dd` di saltare 10 blocchi nel file di output (`fileout`), mentre la lettura di `filein` inizia dall'inizio (senza saltare i primi 10 caratteri). Di conseguenza, non si copia a partire dal decimo carattere. Per saltare i caratteri nel file di input, bisogna usare l'opzione `skip=10`.\n\n**Analisi delle opzioni:**\n- **Opzione D (Corretta come risposta da selezionare - in quanto NON produce il risultato atteso):** Usa erroneamente `seek` al posto di `skip`.\n- **Opzione A (Errata da selezionare, in quanto corretta):** Con `bs=10` e `skip=1` salta 10 byte; con `count=10` copia 100 byte. Produce il risultato corretto.\n- **Opzione C (Errata da selezionare, in quanto corretta):** Con `bs=1` e `skip=10` salta 10 byte; con `count=100` copia 100 byte. Produce il risultato corretto.\n- **Opzione B (Errata):** Essendo la D corretta, questa opzione non si applica."
  },
  {
    "id": 18,
    "topic": "System Call e File",
    "question": "In che file e' contenuta la lista dei filesystem che verranno montati al boot?",
    "options": [
      "/etc/mdev",
      "/etc/mtab",
      "/etc/fstab",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Il file `/etc/fstab` (file systems table) contiene la configurazione statica dei filesystem del sistema, specificando quali partizioni/dispositivi devono essere montati automaticamente all'avvio (boot) e con quali opzioni di montaggio.\n\n**Analisi delle opzioni:**\n- **Opzione C (Corretta):** `/etc/fstab` è il file preposto a questo scopo.\n- **Opzione B (Errata):** `/etc/mtab` contiene i filesystem attualmente montati al momento dell'ispezione, non la configurazione per il boot.\n- **Opzione A (Errata):** `/etc/mdev` non è un file di configurazione dei filesystem nei sistemi standard.\n- **Opzione D (Errata):** Essendo la C corretta, questa opzione non si applica."
  },
  {
    "id": 19,
    "topic": "System Call e File",
    "question": "Supponga di voler mostrare l'albero delle directory con radice dir1 e con profondità 3. \nQuale tra i seguenti comandi e' il più appropriato usare?",
    "options": [
      "tree -d 3 dir1",
      "tree --max-depth=3 dir1",
      "tree -L 3 dir1",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "La system call `wait` (`pid_t wait(int *wstatus);`) sospende l'esecuzione del processo chiamante finché uno dei suoi figli non termina. Se un processo figlio è già terminato ed è nello stato 'zombie', la chiamata ritorna immediatamente, ripulendo lo zombie e restituendo il PID del figlio terminato.\n\n**Analisi delle opzioni:**\n- **Opzione B (Corretta):** La wait si sblocca non appena termina il primo figlio o se ce n'è già uno terminato.\n- **Opzione A (Errata):** Non attende tutti i figli, ma si sblocca al primo che termina.\n- **Opzione C (Errata):** Non attende il processo padre (che è il chiamante).\n- **Opzione D (Errata):** Essendo la B corretta, questa opzione non si applica."
  },
  {
    "id": 20,
    "topic": "Preprocessore e compilazione",
    "question": "Si consideri un file contenente un programma in linguaggio C. Si assuma che e' stata inserita la direttiva `#include \"stdio.h\"`. Perche' la compilazione potrebbe generare errori?",
    "options": [
      "L'inserimento della direttiva non genererà mai errori",
      "Nessuna risposta (0 punti)",
      "Perché il file stdio.h potrebbe non esistere nella directory /usr/include, dove la direttiva dice di cercarlo.",
      "Perché la direttiva dice di cercare il file stdio.h nella directory corrente, mentre tale header file è solitamente memorizzato in un'altra directory del filesystem."
    ],
    "correct_index": 3,
    "explanation": "La funzione `pthread_join(pthread_t thread, void **retval)` attende la terminazione del thread specificato. Se il thread è già terminato, la funzione ritorna immediatamente. Essa permette inoltre di recuperare il valore di ritorno del thread tramite il secondo argomento `retval`.\n\n**Analisi delle opzioni:**\n- **Opzione A (Corretta):** Attende la terminazione dello specifico thread indicato.\n- **Opzione B (Errata):** Non attende tutti i thread creati, ma solo quello specificato.\n- **Opzione D (Errata):** Non attende il thread chiamante.\n- **Opzione C (Errata):** Essendo la A corretta, questa opzione non si applica."
  },
  {
    "id": 21,
    "topic": "System Call e File",
    "question": "Supponiamo di eseguire il comando\n`chmod 6774 nomefile`\nquali permessi di accesso vengono impostati al file nomefile?",
    "options": [
      "-rwsrwsr--",
      "Nessuna risposta (0 punti)",
      "Dà errore e non modifica i permessi di accesso di nomefile",
      "-rwSrwSr--"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nLa scomposizione del permesso ottale `6774` è la seguente: Cifra bit speciali `6` = SetUID (4) + SetGID (2); Proprietario `7` = `rwx` (diventa `rws` per via del SetUID); Gruppo `7` = `rwx` (diventa `rws` per via del SetGID); Altri `4` = `r--`. Di conseguenza, la rappresentazione simbolica finale è `-rwsrwsr--`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (Dà errore e non modifica i permessi di accesso di nomefile):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (-rwSrwSr--):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 22,
    "topic": "System Call e File",
    "question": "Quali sono i permessi MINIMI che devono essere assegnati ad una directory affinché sia possibile:\n* leggere il contenuto della directory inclusi gli attributi dei file;\n* impostare la directory come current working directory;\n* attraversare la directory;",
    "options": [
      "rw-",
      "r-x",
      "rwx",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nPer leggere il contenuto della directory (vedere i nomi dei file) è necessario il permesso di lettura (`r`). Per attraversare la directory (`cd`) e visualizzare gli attributi dei file al suo interno (risolvere i loro inode) è necessario il permesso di esecuzione/ricerca (`x`). Pertanto, la combinazione minima di permessi richiesta è `r-x`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (rw-):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (rwx):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 23,
    "topic": "System Call e File",
    "question": "Si supponga di avere un file di testo (filein) e di voler copiare in un altro file (fileout) i primi 100 caratteri. Quale di questi comandi e' corretto?",
    "options": [
      "Nessuna risposta (0 punti)",
      "dd if=filein of=fileout bs=100 count=1",
      "dd if=filein of=fileout bs=1 skip=1 count=100",
      "dd if=filein of=fileout bs=10 skip=10 count=10"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nIl comando `dd` con `bs=100` (block size) e `count=1` legge esattamente 1 blocco di 100 byte dall'inizio del file sorgente e lo scrive nella destinazione, copiando così i primi 100 caratteri.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (dd if=filein of=fileout bs=1 skip=1 count=100):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (dd if=filein of=fileout bs=10 skip=10 count=10):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 24,
    "topic": "Preprocessore e compilazione",
    "question": "Data la seguente funzione ricorsiva:\n\n```c\nint myfun2(int b){\n    static int a;\n    if (b) return 0;\n    else return a*myfun2(b++*(a-1));\n}\n```\nquale valore e' ritornato dalla chiamata myfun2(0)?",
    "options": [
      "Nessuna risposta (0 punti)",
      "Non viene ritornato alcun valore perché la funzione entra in un ciclo ricorsivo infinito.",
      "0",
      "1"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nLa chiamata `myfun2(0)` esegue il blocco `else` poiché `b` è `0`. L'espressione dell'argomento ricorsivo è `b++ * (a - 1)`. Poiché l'operatore di post-incremento `b++` restituisce il valore corrente `0` prima di incrementare, il prodotto calcolato è `0 * (a - 1) = 0`. La funzione chiama quindi ricorsivamente `myfun2(0)`. Questo genera un ciclo ricorsivo infinito che porta a un crash per esaurimento dello stack (`stack overflow`).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (0):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (1):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 25,
    "topic": "Puntatori",
    "question": "Come si dichiara un puntatore a funzione *myptr* per una funzione che ritorna una stringa e richiede una stringa?",
    "options": [
      "Nessuna risposta (0 punti)",
      "char *(*myptr)(char *)",
      "char **myptr(char *)",
      "char *myptr(char *)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nPer dichiarare un puntatore a una funzione, è necessario inserire il simbolo `*` e il nome del puntatore tra parentesi tonde, es. `(*myptr)`, per evitare che l'operatore di deferenziazione si associ al tipo di ritorno. Poiché la funzione ritorna un puntatore a carattere (`char *`) e riceve come argomento un puntatore a carattere (`char *`), la sintassi corretta è `char *(*myptr)(char *)`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (`char **myptr(char *)`):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (`char *myptr(char *)`):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 26,
    "topic": "Puntatori",
    "question": "Date le dichiarazioni:\n```c\nint a[5], *pa;\n```\nQuale delle seguenti affermazioni e' vera?",
    "options": [
      "a[4] == pa + 4",
      "a[1] == *pa + 1",
      "a[0] == *pa",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nL'espressione `*pa` rappresenta la dereferenziazione del puntatore. Assumendo che `pa` sia stato inizializzato per puntare all'inizio dell'array `a` (ovvero `pa = a;`), allora `*pa` equivale a `a[0]`, rendendo l'affermazione `a[0] == *pa` vera. Nota: Sebbene nel codice mostrato manchi la riga di inizializzazione `pa = a;` (il che renderebbe a runtime l'accesso a `*pa` indefinito), la soluzione dell'esame assume questa inizializzazione come implicita.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (a[4] == pa + 4):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (a[1] == *pa + 1):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 27,
    "topic": "Gestione Stringhe",
    "question": "Sia str una stringa C (ovvero terminata dal carattere nullo). Che cosa ritorna la chiamata myfun(str)?\n\n```c\nint myfun(char *s) {\n   char *p = s;\n   while (*p != '\\0')\n      p++;\n   return (p-s);\n}\n```",
    "options": [
      "La locazione dell'ultimo carattere di str.",
      "Nessuna risposta (0 punti)",
      "La differenza di locazione tra str e il parametro della funzione.",
      "La lunghezza di str."
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Gestione Stringhe*\n\n**Perché la risposta è corretta:**\nLa funzione fa scorrere il puntatore `p` fino a quando non punta al carattere terminatore `\\0`. Al termine, la differenza `p - s` calcola la distanza in byte/caratteri tra l'inizio della stringa e la sua fine, che equivale esattamente alla lunghezza della stringa (escluso il carattere nullo), comportandosi come `strlen`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (La locazione dell'ultimo carattere di str.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione C (La differenza di locazione tra str e il parametro della funzione.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 28,
    "topic": "Preprocessore e compilazione",
    "question": "Quale e' l'uso della clausola extern nella dichiarazione di variabili del C?",
    "options": [
      "Nessuna risposta (0 punti)",
      "Per rendere visibili variabili definite in altri file.",
      "Per usare una variabile che non è visibile nel punto in cui la si vuole utilizzare.",
      "Per rendere le variabili utilizzabili dalle funzioni di libreria sul file."
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nLa parola chiave `extern` dichiara una variabile o funzione indicando al compilatore che il simbolo è definito in un'altra unità di traduzione (un altro file `.c`). Questo permette al linker di risolvere i riferimenti a variabili globali condivise tra più file sorgente.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (Per usare una variabile che non è visibile nel punto in cui la si vuole utilizzare.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Per rendere le variabili utilizzabili dalle funzioni di libreria sul file.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 29,
    "topic": "Puntatori",
    "question": "Data il seguente frammento di codice:\n```c\nstruct {\n   int a;\n   int *b;\n} *p;\n```\nQuale delle seguenti istruzioni incrementa di uno il valore del campo a?",
    "options": [
      "p->(a++)",
      "(*p).++a",
      "++p->a",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nL'operatore di accesso ai membri tramite puntatore `->` ha precedenza massima. L'espressione `++p->a` viene interpretata come `++(p->a)`, che incrementa correttamente di uno il valore della variabile `a` all'interno della struttura puntata da `p`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (p->(a++)):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B ((*p).++a):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 30,
    "topic": "Puntatori",
    "question": "Come si dichiara un puntatore a funzione `myptr` per una funzione che ritorna un `int` e richiede un `int`?",
    "options": [
      "int (*myptr)(int)",
      "Nessuna risposta (0 punti)",
      "int (*)myptr(int)",
      "int *myptr(int)"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nPer dichiarare un puntatore a funzione in C, la sintassi corretta richiede che l'asterisco e il nome del puntatore siano racchiusi tra parentesi, es. `(*myptr)`. Questo lo distingue da una normale dichiarazione di funzione che ritorna un puntatore a intero, come `int *myptr(int)`. Essendo il tipo di ritorno `int` ed il tipo del parametro `int`, la sintassi corretta è `int (*myptr)(int)`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (int (*)myptr(int)):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (int *myptr(int)):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 31,
    "topic": "Puntatori",
    "question": "Siano date le dichiarazioni per una matrice di interi:\n```c\nint A[10][10], *B[10];\n```\nSupponendo di aver allocato (ad es. con malloc) sufficiente memoria per B, quale delle seguenti affermazioni e' falsa?",
    "options": [
      "Nessuna risposta (0 punti)",
      "Gli elementi di B devono essere array di 10 interi.",
      "A[2][3] e B[15][7] sono validi riferimenti ad un int.",
      "L'accesso agli elementi di B e' più veloce dell'accesso a quelli di A perché effettuato con un puntatore ad ogni colonna della matrice."
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nL'affermazione D è falsa per due ragioni fondamentali: 1) L'accesso a un elemento tramite array di puntatori `B[i][j]` richiede un livello di indirezione in più rispetto a una matrice contigua (due accessi alla memoria anziché uno solo preceduto da una veloce operazione aritmetica), rendendolo in realtà più lento dell'accesso ad `A`. 2) Gli elementi di `B` sono puntatori alle righe della matrice, non alle colonne. L'affermazione C invece è considerata vera dal punto di vista puramente sintattico (entrambe le espressioni compilano correttamente come accessi a valori di tipo `int`).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione B (Gli elementi di B devono essere array di 10 interi.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (A[2][3] e B[15][7] sono validi riferimenti ad un int.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 32,
    "topic": "Preprocessore e compilazione",
    "question": "Si consideri il frammento di codice:\n```c\ni=0; c=0; p=1;\nwhile (i++ < 10)\n  c=c+1;\np--;\n```\nche valore conterrà la variabile p al termine dell'esecuzione del frammento di codice?",
    "options": [
      "Nessuna risposta (0 Punti)",
      "-9",
      "-10",
      "0"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nPoiché il ciclo `while` non contiene parentesi graffe, solo la prima istruzione successiva (`c=c+1;`) costituisce il corpo del ciclo. L'istruzione `p--;` si trova fuori dal ciclo e viene eseguita una sola volta al termine di esso. Essendo il valore iniziale di `p` pari a 1, l'operazione `p--` lo decrementa a 0.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione B (-9):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (-10):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 33,
    "topic": "Puntatori",
    "question": "Si consideri la seguente dichiarazione di struttura\n```c\nstruct point2D {\n   double x; // coordinata x\n   double y; // coordinata y\n} pA={0, 0}, pB={1, 5};\n```\nQuale delle seguenti assegnazione permette di memorizzare in pA i valori di pB?",
    "options": [
      "pA = &pB",
      "pA = pB;",
      "*pA = *pB;\npA -> y = pB -> y;",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nIn linguaggio C, è possibile copiare direttamente i valori di una struttura in un'altra dello stesso tipo usando l'operatore di assegnamento `=`, ad esempio `pA = pB;`. Il compilatore copia in modo efficiente tutti i campi membro a membro.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (pA = &pB):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (*pA = *pB;):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 34,
    "topic": "Preprocessore e compilazione",
    "question": "Cosa fa il seguente segmento di codice se eseguito?\n```c\nint num;\nscanf(\"%d\",&num);\ndo; {\n   printf(\"%d\\n\",num);\n   scanf(\"%d\",&num);\n} while(num!=0);\n```",
    "options": [
      "Genera errore in fase di compilazione",
      "Cicla infinitamente se num e' diverso da 0",
      "Nessuna risposta (0 punti)",
      "Stampa il valore di num almeno una volta"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nLa presenza del punto e virgola subito dopo la parola chiave `do` (ovvero `do;`) crea un ciclo con un'istruzione vuota come corpo del ciclo `do-while`. Il compilatore si aspetta la parola chiave `while` immediatamente dopo il punto e virgola, ma incontra invece l'apertura di un blocco `{`. Questo genera un errore di sintassi e impedisce la compilazione del codice.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Cicla infinitamente se num e' diverso da 0):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (Stampa il valore di num almeno una volta):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 35,
    "topic": "System Call e File",
    "question": "Si consideri il seguente frammento di codice\n```c\nFILE *pFile;\npFile = fopen(\"myfile.txt\",\"rw+\");\nfprintf(pFile, \"%f %s\", 3.1416, \"PI\");\n```\nAssumendo che myfile.txt esista, quale delle seguenti affermazioni e' vera?",
    "options": [
      "Il programma genera un errore in fase di compilazione.",
      "Il programma scrive sul file myfile.txt la stringa 3.1416 PI.",
      "Il programma genera errore di segmentazione.",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nSotto molte implementazioni comuni della libreria standard C (inclusa la glibc utilizzata sui sistemi Linux standard), la stringa di modalità non standard 'rw+' viene interpretata in modo tollerante leggendone il primo carattere ('r') e il simbolo +, venendo quindi considerata equivalente alla modalità 'r+' (apertura in lettura/scrittura senza troncare il file). Di conseguenza, la chiamata `fopen` non restituisce `NULL` ma apre con successo il file, permettendo alla `fprintf` di scrivere al suo interno la stringa formattata senza causare errori di segmentazione a runtime.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il programma genera un errore in fase di compilazione.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Il programma genera errore di segmentazione.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 36,
    "topic": "Preprocessore e compilazione",
    "question": "Si supponga di avere due file hw1.c e hw2.c contenenti il seguente codice\n\n**hw1.c**:\n```c\n#include <stdio.h>\n#include \"hw2.c\"\nint f(int argc, char *args[]) {\n    printf(\"Hello World!\\n\");\n    return 256;\n}\n```\n\n**hw2.c**:\n```c\nint f(int argc, char *args[]);\nint main(int argc, char *args[]){\n    return f(argc, args);\n}\n```\n\nQuale dei seguenti comandi di compilazione non genera errore?",
    "options": [
      "Nessuna risposta (0 punti)",
      "gcc -Wall hw1.c -o hw.out",
      "gcc -Wall hw1.c hw2.c -o hw.out",
      "gcc -Wall hw2.c -o hw.out"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nIl file `hw1.c` include già al suo interno il codice di `hw2.c` tramite `#include \"hw2.c\"`. Pertanto, compilando solo `hw1.c` (con `gcc -Wall hw1.c -o hw.out`), il compilatore ha a disposizione sia la definizione del `main` che della funzione `f`, producendo l'eseguibile correttamente. Gli altri comandi falliscono: compilando entrambi i file insieme si generano errori per simboli duplicati, mentre compilando solo `hw2.c` manca la definizione del corpo di `f`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (gcc -Wall hw1.c hw2.c -o hw.out):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (gcc -Wall hw2.c -o hw.out):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 37,
    "topic": "Preprocessore e compilazione",
    "question": "Quale di queste stringe non e' valida come identificatore in C?",
    "options": [
      "Nessuna risposta (0 punti)",
      "x-axis",
      "_voltage",
      "rerun"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nGli identificatori in C possono contenere lettere, cifre e il carattere underscore `_`. Non possono contenere caratteri speciali come il trattino `-`. Pertanto, `x-axis` non è un identificatore valido.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (_voltage):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (rerun):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 38,
    "topic": "Preprocessore e compilazione",
    "question": "Si consideri il seguente ciclo for\n```c\nint scoreCount, a;\nfor (scoreCount=0; scanf(\"%d\",&a)==1; scoreCount++);\n```\nSe eseguito, cosa produce come risultato?",
    "options": [
      "Legge ripetutamente numeri interi da stdin e termina quando e' fornito un input di tipo diverso (ad esempio un carattere)",
      "Legge una sola volta da stdin e poi termina, qualunque sia l'input",
      "Nessuna risposta (0 punti)",
      "Legge da stdin senza mai terminare"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nLa condizione del ciclo `for` è `scanf(\"%d\",&a)==1`, che è vera finché `scanf` legge e converte correttamente un valore intero dallo standard input. Il ciclo continua a leggere numeri e si interrompe non appena l'utente digita un input non numerico (causando un matching failure per cui `scanf` ritorna 0) o quando viene incontrato l'EOF (per cui `scanf` ritorna -1).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Legge una sola volta da stdin e poi termina, qualunque sia l'input):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (Legge da stdin senza mai terminare):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 39,
    "topic": "System Call e File",
    "question": "Supponiamo di avere il seguente makefile (memorizzato in un file di nome makefile):\n```makefile\nmerge_sorted_lists: merge_sorted_lists.c\n\tgcc -Wall -Wextra -O3 merge_sorted_lists.c -o merge_sorted_lists\nsort_file_int: sort_file_int.c\n\tgcc -Wall -Wextra -O3 sort_file_int.c -o sort_file_int\n.PHONY: clean\nclean:\n\trm -f *.o merge_sorted_lists\n```\nsupponendo che non esistano entrambi i file merge_sorted_lists e sort_file_int e lanciando il comando make, quale target viene eseguito?",
    "options": [
      "merge_sorted_list",
      "nessuno dei due. Va specificato quale vogliamo eseguire con il comando make <nome_target>",
      "Nessuna risposta (0 punti)",
      "entrambi"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nIn un Makefile, se il comando `make` viene invocato senza argomenti, viene eseguito il primo target definito nel file che non sia un target speciale (ovvero che non inizi con un punto `.`). In questo caso, il primo target definito è `merge_sorted_lists`, che verrà quindi compilato ed eseguito per primo.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (nessuno dei due. Va specificato quale vogliamo eseguire con il comando make <nome_target>):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (entrambi):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 40,
    "topic": "Preprocessore e compilazione",
    "question": "Si consideri il seguente frammento di codice\n```c\nint scoreCount, a;\nfor(scoreCount=0; scanf(\"%d\",&a)==1; scoreCount++);\n```\nSe la sequenza letta in input da scanf e'\n`1 3 7 2 12 w`\nquale valore assumerà scoreCount al termine del ciclo?",
    "options": [
      "Il ciclo non termina. La scanf va in errore quando viene letta la w",
      "6",
      "5",
      "Nessuna risposta (0 Punti)"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nIl ciclo incrementa `scoreCount` ogni volta che `scanf` riesce a leggere con successo un intero. Con la sequenza `1 3 7 2 12 w`, i primi cinque elementi (`1`, `3`, `7`, `2`, `12`) sono interi validi e vengono convertiti con successo (incrementando `scoreCount` fino a 5). Il sesto elemento `'w'` è un carattere non numerico che causa un matching failure e l'interruzione immediata del ciclo. `scoreCount` al termine del ciclo assume quindi il valore `5`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il ciclo non termina. La scanf va in errore quando viene letta la w):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (6):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 41,
    "topic": "Funzioni di Input/Output",
    "question": "Si consideri il seguente frammento di codice:\n```c\nint x, y, nread;\nfloat xx, yy;\n\nnread=scanf(\"%d %d\",&x, &y);\nprintf(\"x=%d, y=%d, nread=%d \\n\",x,y,nread);\nprintf(\"xx=%f, yy=%f, nread=%d \\n\",xx,yy,nread);\nnread=scanf(\"%f %f\",&xx, &yy);\n```\n\nAssumiamo che, in fase di esecuzione, la prima `scanf` legga su stdin la sequenza `1 w`.\nQuale sarà il valore di `nread` dopo l'esecuzione della seconda `scanf`?",
    "options": [
      "Nessuna risposta (0 punti)",
      "0",
      "dipende dall'input letto su stdin dalla seconda scanf",
      "2"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Funzioni di Input/Output*\n\n**Perché la risposta è corretta:**\nDurante la prima chiamata `scanf(\"%d %d\", &x, &y)` con input `1 w`, il valore `1` viene letto correttamente in `x`. Successivamente, `scanf` tenta di leggere un intero (`%d`) per `y`, ma incontra il carattere `'w'`, che non è numerico. Questo causa un errore di corrispondenza (`matching failure`), e la funzione ritorna `1` (il numero di campi convertiti con successo), lasciando `'w\\n'` nel buffer di input (`stdin`).\n\nQuando viene eseguita la seconda `scanf(\"%f %f\", &xx, &yy)`, essa legge dal buffer rimasto, trovando subito il carattere `'w'`. Poiché si aspetta un valore floating-point (`%f`), si verifica immediatamente un altro `matching failure` e la `scanf` termina restituendo `0`, in quanto nessun elemento è stato convertito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (dipende dall'input letto su stdin dalla seconda scanf):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (2):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 42,
    "topic": "Puntatori",
    "question": "Supponiamo di aver inizializzato un puntatore ad una variabile intera in questo modo:\n```c\nint num=5, *ptrnum;\nptrnum=&num;\n```\n\nCome possiamo assegnare 10 al valore indiretto di `ptrnum` dopo l'inizializzazione?",
    "options": [
      "ptrnum = (int *) 10;",
      "ptrnum = 10;",
      "Nessuna risposta (0 punti)",
      "*ptrnum = 10;"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nL'operatore di deferenziazione (o di indirezione) `*` consente di accedere al valore memorizzato all'indirizzo a cui il puntatore fa riferimento. Di conseguenza, scrivendo `*ptrnum = 10;` andiamo a modificare direttamente il valore della variabile `num` puntata da `ptrnum`, assegnandole il valore `10`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (ptrnum = (int *) 10;):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (ptrnum = 10;):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 43,
    "topic": "Parametri Linea di Comando",
    "question": "Supponiamo di avere il file eseguibile `mioprogramma` (ottenuto dalla compilazione di un programma C) che accetta tre parametri da linea di comando.\nConsideriamo i seguenti due modi di invocare il programma:\n`$ ./mioprogramma A B C`\n`$ ./mioprogramma < input.txt`\ndove A, B e C sono dei parametri ed il file `input.txt` contiene `A B C`.\n\nLe due invocazioni del programma `mioprogramma` sono equivalenti?",
    "options": [
      "SI', sono modi equivalenti di invocare il programma. In entrambi i casi mioprogramma riceve sullo stdin A B C",
      "SI', sono modi equivalenti di invocare il programma. In entrambi i casi mioprogramma riceve A B C in argv",
      "No, non sono modi equivalenti di invocare il programma. Nel primo caso A B C vengono caricati in argv, nel secondo caso vengono inviati sullo stdin",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Parametri Linea di Comando*\n\n**Perché la risposta è corretta:**\nNel primo comando `./mioprogramma A B C`, le stringhe `A`, `B` e `C` vengono passate come argomenti a riga di comando e saranno disponibili nell'array `argv` della funzione `main`.\n\nNel secondo comando `./mioprogramma < input.txt`, viene effettuata una ridirezione dello standard input (`stdin`). Il programma non riceve parametri aggiuntivi in `argv`, ma leggerà il testo `A B C` quando tenterà di leggere da `stdin` (ad esempio con `scanf` o `read`). Pertanto, le due invocazioni non sono equivalenti.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (SI', sono modi equivalenti di invocare il programma. In entrambi i casi mioprogramma riceve sullo stdin A B C):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (SI', sono modi equivalenti di invocare il programma. In entrambi i casi mioprogramma riceve A B C in argv):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 44,
    "topic": "Gestione Stringhe",
    "question": "Si consideri la seguente funzione `f`:\n```c\nchar *f(char *a, const char *b, size_t n) {\n    size_t i;\n    for (i = 0; i < n && b[i] != '\\0'; i++)\n        a[i] = b[i];\n    for ( ; i < n; i++)\n        a[i] = '\\0';\n    return a;\n}\n```\n\nCosa produce come risultato quando eseguita?",
    "options": [
      "Copia esattamente n caratteri della stringa b nella stringa a e restituisce a",
      "Copia al più n caratteri della stringa b nella stringa a e restituisce a",
      "Concatena al più n caratteri della stringa b alla stringa a e restituisce a",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Gestione Stringhe*\n\n**Perché la risposta è corretta:**\nQuesta funzione implementa il comportamento standard della funzione `strncpy`. Essa copia i caratteri dalla stringa sorgente `b` alla stringa destinazione `a` fino ad un massimo di `n` caratteri. Se la stringa `b` è più corta di `n` caratteri, i caratteri rimanenti in `a` vengono riempiti con il carattere nullo `'\\0'`. Quindi copia al più `n` caratteri e restituisce `a`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Copia esattamente n caratteri della stringa b nella stringa a e restituisce a):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Concatena al più n caratteri della stringa b alla stringa a e restituisce a):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 45,
    "topic": "System Call e File",
    "question": "Si consideri il seguente frammento di codice:\n```c\nFILE *pFile;\npFile = open(\"myfile.txt\",\"w+\");\nfprintf(pFile, \"%f %s\", 3.1416, \"PI\");\n```\n\nQuale delle seguenti affermazioni e' vera?",
    "options": [
      "Il programma scrive sul file myfile.txt la stringa 3.1416 PI",
      "Il programma genera un errore in fase di esecuzione",
      "Nessuna risposta (0 punti)",
      "Il programma genera errore in fase di compilazione"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nNel codice viene utilizzata la funzione `open` assegnandone il risultato a una variabile di tipo `FILE *`. In C, la system call `open` restituisce un descrittore di file di tipo `int`, mentre per ottenere un puntatore a `FILE *` è necessario utilizzare la funzione della libreria standard `fopen`. Inoltre, `open` accetta flag interi (come `O_RDWR`), non una stringa come `\"w+\"`. Questo causa un errore di compilazione dovuto a incompatibilità di tipi. Se invece fosse stato scritto `fopen` invece di `open`, il codice sarebbe stato corretto e avrebbe scritto sul file.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il programma scrive sul file myfile.txt la stringa 3.1416 PI):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Il programma genera un errore in fase di esecuzione):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 46,
    "topic": "Compilazione e Linker",
    "question": "Supponga di avere due file `hw1.c` e `hw2.c` contenenti il seguente codice:\n\n```c\n// hw1.c\n#include <stdio.h>\n#include \"hw2.c\"\nint f(int argc, char *args[]) {\n    printf(\"Hello World!\\n\");\n    return 256;\n}\n\n// hw2.c\nint f(int argc, char *args[]);\nint main(int argc, char *args[]){\n    return f(argc, args);\n}\n```\n\nQuale dei seguenti comandi di compilazione genera errore?",
    "options": [
      "gcc -Wall hw1.c hw2.c -o hw.out",
      "gcc hw1.c",
      "gcc -Wall hw1.c -o hw.out",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Compilazione e Linker*\n\n**Perché la risposta è corretta:**\nPoiché il file `hw1.c` include direttamente al suo interno il file `hw2.c` tramite `#include \"hw2.c\"`, la compilazione di `hw1.c` da sola (`gcc -Wall hw1.c -o hw.out`) contiene già sia la definizione della funzione `f` sia il `main`. Se proviamo a compilare entrambi i file insieme con `gcc -Wall hw1.c hw2.c -o hw.out`, il linker troverà definizioni duplicate per le funzioni contenute in `hw2.c` (in particolare per il `main`), generando un errore di compilazione/linking.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (gcc hw1.c):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (gcc -Wall hw1.c -o hw.out):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 47,
    "topic": "Sintassi C",
    "question": "Quale di queste stringhe e' valida come identificatore in C?",
    "options": [
      "x-ray",
      "return",
      "_voltage",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Sintassi C*\n\n**Perché la risposta è corretta:**\nIn C, un identificatore valido può contenere solo lettere, cifre e l'underscore `_`, e deve iniziare con una lettera o un underscore. Inoltre, non può coincidere con parole chiave riservate del linguaggio (come `return`). Di conseguenza, `_voltage` è l'unico identificatore valido. `x-ray` non è valido a causa del carattere `-`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (x-ray):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (return):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 48,
    "topic": "Strutture di Controllo",
    "question": "Si consideri il seguente frammento di codice:\n```c\nint i, n1=10, n2=100;\nfor (i=0; ((i<n1)&&(i<n2)); i++)\n    m2[i]=m1[i];\n```\nquando termina il ciclo for?",
    "options": [
      "Quando il valore di i è uguale a n1",
      "Quando il valore di i è uguale a n2",
      "Non termina perché n1 è diverso da n2",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Strutture di Controllo*\n\n**Perché la risposta è corretta:**\nLa condizione del ciclo `for` è `(i < n1) && (i < n2)`. Affinché il ciclo continui, entrambe le condizioni devono essere contemporaneamente vere. Poiché `n1` è uguale a 10 e `n2` è uguale a 100, quando `i` raggiunge il valore di 10 la condizione `i < 10` diventa falsa, provocando l'immediata interruzione del ciclo. Quindi il ciclo termina quando `i` è uguale a `n1`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Quando il valore di i è uguale a n2):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Non termina perché n1 è diverso da n2):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 49,
    "topic": "Scope delle Variabili",
    "question": "Quale delle seguenti affermazioni sulle variabili statiche esterne e' falsa?",
    "options": [
      "Sono dichiarate al di fuori di ogni funzione (in un dato file sorgente).",
      "Nessuna risposta (0 punti)",
      "Sono visibili solo da funzioni esterne.",
      "Non sono visibili al di fuori del file sorgente in cui sono definite."
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Scope delle Variabili*\n\n**Perché la risposta è corretta:**\nLe variabili statiche esterne (dichiarate con `static` al di fuori di qualsiasi funzione) hanno un collegamento interno (`internal linkage`). Sono visibili da qualsiasi funzione definita all'interno dello stesso file sorgente (non solo da funzioni esterne) e la loro visibilità è strettamente confinata a tale file sorgente.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Sono dichiarate al di fuori di ogni funzione (in un dato file sorgente).):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione D (Non sono visibili al di fuori del file sorgente in cui sono definite.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 50,
    "topic": "Scope delle Funzioni",
    "question": "Quale delle seguenti affermazioni sulla funzioni statiche e' vera?",
    "options": [
      "Nessuna risposta (0 punti)",
      "In una funzione statica si possono dichiarare solo variabili statiche.",
      "Le variabili automatiche di funzioni statiche sono inizializzate a 0 prima di ogni chiamata della funzione.",
      "Le funzioni statiche non sono visibili al di fuori del file sorgente in cui sono definite."
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Scope delle Funzioni*\n\n**Perché la risposta è corretta:**\nLa parola chiave `static` applicata a una funzione C ne limita l'ambito di visibilità (linkage interno) al solo file sorgente in cui è definita. Funzioni in altri file non possono richiamarla né vederla.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione B (In una funzione statica si possono dichiarare solo variabili statiche.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Le variabili automatiche di funzioni statiche sono inizializzate a 0 prima di ogni chiamata della funzione.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 51,
    "topic": "Scope delle Funzioni",
    "question": "Quale delle seguenti affermazioni sulle funzioni statiche e' falsa?",
    "options": [
      "Nessuna risposta (0 punti)",
      "Una funzione statica può allocare memoria dello stack.",
      "Le variabili automatiche di funzioni statiche sono inizializzate a 0 alla prima chiamata della funzione.",
      "Le funzioni statiche sono visibili al di fuori del file sorgente in cui sono definite."
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Scope delle Funzioni*\n\n**Perché la risposta è corretta:**\nCome definito in precedenza, le funzioni statiche non sono visibili al di fuori del file sorgente. Di conseguenza, affermare che siano visibili all'esterno è falso.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione B (Una funzione statica può allocare memoria dello stack.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Le variabili automatiche di funzioni statiche sono inizializzate a 0 alla prima chiamata della funzione.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 52,
    "topic": "Gestione Stringhe in C",
    "question": "Siano `str1` e `str2` due stringhe C (ovvero terminate dal carattere nullo). Che cosa produce la chiamata `myfun(str1, str2)`?\n```c\nvoid myfun(char *s, char *t) {\n    while (*s++ = *t++);\n}\n```",
    "options": [
      "Nessuna risposta (0 punti)",
      "Nulla perché non c'è alcun return nella funzione.",
      "Copia str2 in str1.",
      "Nulla perché le due stringhe parametro sono effettivamente variabili locali."
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Gestione Stringhe in C*\n\n**Perché la risposta è corretta:**\nIl ciclo `while (*s++ = *t++);` copia ogni singolo carattere dall'indirizzo puntato da `t` (sorgente `str2`) all'indirizzo puntato da `s` (destinazione `str1`). L'assegnamento termina quando viene copiato il carattere nullo `\\0`, poiché l'espressione di assegnamento assume valore 0 (falso), interrompendo il ciclo `while`. Di conseguenza, copia la stringa `str2` in `str1`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (Nulla perché non c'è alcun return nella funzione.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nulla perché le due stringhe parametro sono effettivamente variabili locali.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 53,
    "topic": "Inizializzazione Variabili",
    "question": "Che cosa stampa il seguente frammento di codice:\n```c\nstatic int myvar;\nvoid func1() {\n    myvar++;\n}\nvoid main(void) {\n    func1();\n    printf(\"myvar = %d\\n\", myvar);\n}\n```",
    "options": [
      "Nessuna risposta (0 punti)",
      "myvar = n+1, dove n e' un numero casuale scelto dal compilatore",
      "myvar = 1",
      "Nulla, il compilatore dà errore perché si e' usata la clausola static al di fuori di una funzione."
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Inizializzazione Variabili*\n\n**Perché la risposta è corretta:**\nLa variabile `myvar` è dichiarata `static` a livello globale (file-scope). Per le regole del C, le variabili globali statiche vengono inizializzate automaticamente a 0 dal compilatore. La funzione `func1()` incrementa `myvar` portandola a 1, che viene poi stampato da `main`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (myvar = n+1, dove n e' un numero casuale scelto dal compilatore):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nulla, il compilatore dà errore perché si e' usata la clausola static al di fuori di una funzione.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 54,
    "topic": "Comandi Unix/Linux",
    "question": "Assumete di voler visualizzare il numero di inode di un file, quale dei seguenti comandi e' più corretto usare?",
    "options": [
      "Nessuna risposta (0 punti)",
      "ls -l -i nomefile",
      "ls -l -n nomefile",
      "stat -f nomefile"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Comandi Unix/Linux*\n\n**Perché la risposta è corretta:**\nL'opzione `-i` del comando `ls` indica specificamente di mostrare l'indice (inode) del file. Il comando `ls -l -i nomefile` stamperà quindi l'inode seguito dalle altre informazioni. (Nota: `stat -f` mostra lo stato del filesystem, non dell'inode del file singolo).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (ls -l -n nomefile):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (stat -f nomefile):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 55,
    "topic": "Sicurezza in Unix/Linux",
    "question": "Perche' il comando `passwd` (ovvero il file eseguibile `/usr/bin/passwd`) ha il SetUID bit settato?",
    "options": [
      "Per consentire a qualsiasi utente di modificare la propria password",
      "Nessuna risposta (0 punti)",
      "Per evitare che un utente possa cancellare il file eseguibile passwd",
      "Per evitare che un utente possa modificare le password degli altri utenti"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Sicurezza in Unix/Linux*\n\n**Perché la risposta è corretta:**\nIl comando `passwd` deve aggiornare il file `/etc/shadow` contenente le password cifrate del sistema, che è accessibile in scrittura solo all'utente root. Impostando il bit SetUID sull'eseguibile, il processo viene eseguito con i privilegi di root, permettendo a ciascun utente di aggiornare la propria password in sicurezza.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (Per evitare che un utente possa cancellare il file eseguibile passwd):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Per evitare che un utente possa modificare le password degli altri utenti):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 56,
    "topic": "Permessi del File System",
    "question": "Supponiamo di avere una directory `/home/dir` creata da `root` con diritti di accesso `1777/drwxrwxrwt` ed al suo interno il file `filename`, creato da `root`, con diritti di accesso `0770/-rwxrwx---`. Supponiamo quindi di eseguire il comando `rm /home/dir/filename` eseguito come utente normale (non root). Quale delle seguenti affermazioni e' corretta?",
    "options": [
      "Il file non verrà cancellato perché lo sticky bit e' settato",
      "Nessuna risposta (0 punti)",
      "Il file verrà cancellato perché lo sticky bit non e' settato",
      "Il file non verrà cancellato perché il proprietario del file e' root ed i diritti per il gruppo others sono tutti resettati"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Permessi del File System*\n\n**Perché la risposta è corretta:**\nLa directory `/home/dir` ha i permessi `1777`, che includono lo sticky bit (rappresentato dalla `t` alla fine). Lo sticky bit su una directory impedisce a un utente di cancellare o rinominare file al suo interno a meno che l'utente non sia il proprietario del file, il proprietario della directory, o root. Poiché il file `filename` e la directory sono entrambi di proprietà di root, un utente normale non ha il diritto di cancellarlo.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (Il file verrà cancellato perché lo sticky bit non e' settato):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Il file non verrà cancellato perché il proprietario del file e' root ed i diritti per il gruppo others sono tutti resettati):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 57,
    "topic": "Comandi Unix/Linux",
    "question": "Quale dei seguenti comandi permette di visualizzare contemporaneamente l'access time e lo status change time di un file?",
    "options": [
      "stat nomefile",
      "Nessuna risposta (0 punti)",
      "ls -lac nomefile",
      "ls -la nomefile"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Comandi Unix/Linux*\n\n**Perché la risposta è corretta:**\nIl comando `stat` visualizza informazioni complete su un file, compresi tutti e tre i timestamp fondamentali: access time (ultimo accesso), modify time (ultima modifica del contenuto) e change time (ultimo cambio di metadati/status), stampandoli contemporaneamente.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (ls -lac nomefile):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (ls -la nomefile):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 58,
    "topic": "File System Paths",
    "question": "Supponendo di aver aperta una shell come `utente1`. Quali dei seguenti e' un path assoluto?",
    "options": [
      "Nessuna risposta (0 punti)",
      "~/dir1/dir11/dir112/filename",
      "../utente1/dir1/dir11/dir112/filename",
      "dir1/dir11/dir112/filename"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: File System Paths*\n\n**Perché la risposta è corretta:**\nSebbene un percorso assoluto debba iniziare con `/`, la tilde `~` viene espansa dalla shell nel percorso assoluto della home dell'utente (es: `/home/utente1/dir1...`). Tra le opzioni presentate, è l'unica che risolve in modo univoco a una posizione assoluta indipendentemente dalla directory corrente di lavoro.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (../utente1/dir1/dir11/dir112/filename):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (dir1/dir11/dir112/filename):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 59,
    "topic": "Comandi Unix/Linux",
    "question": "Quale e' il risultato del comando `touch nomefile` ?",
    "options": [
      "Nessuna risposta (0 punti)",
      "Crea un file vuoto con nome nomefile in sostituzione dell'esistente",
      "Crea un file vuoto con nome nomefile in sostituzione dell'esistente e valore del ctime aggiornato al tempo corrente",
      "Aggiorna, al tempo corrente, gli attributi atime e mtime di nomefile"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Comandi Unix/Linux*\n\n**Perché la risposta è corretta:**\nIl comando `touch` aggiorna i timestamp di accesso (`atime`) e modifica (`mtime`) al tempo corrente. Se il file esiste già, il suo contenuto non viene in alcun modo alterato o sostituito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione B (Crea un file vuoto con nome nomefile in sostituzione dell'esistente):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Crea un file vuoto con nome nomefile in sostituzione dell'esistente e valore del ctime aggiornato al tempo corrente):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 60,
    "topic": "Gestione Memoria",
    "question": "Un processo puo' allocare memoria solo nell'heap?",
    "options": [
      "Nessuna risposta (0 Punti)",
      "Si, mediante la funzione di libreria malloc(3) e calloc(3)",
      "Si, mediante le funzioni di libreria malloc(3), calloc(3) e alloca(3)",
      "No. Può allocare anche memoria nello stack mediante la funzione di libreria alloca(3)"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Gestione Memoria*\n\n**Perché la risposta è corretta:**\nUn processo alloca memoria sia nell'heap (tramite malloc/calloc) sia nello stack (automaticamente per le variabili locali o esplicitamente tramite la funzione `alloca` che alloca dinamicamente spazio sullo stack frame corrente).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione B (Si, mediante la funzione di libreria malloc(3) e calloc(3)):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Si, mediante le funzioni di libreria malloc(3), calloc(3) e alloca(3)):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 61,
    "topic": "System Call I/O",
    "question": "In quale situazione le system call `dup(2)` e `dup2(2)` hanno lo stesso comportamento?",
    "options": [
      "Nessuna risposta (0 Punti)",
      "Nel caso in cui la dup2(2) venga invocata specificando che il nuovo file descriptor deve essere il file descriptor disponibile con il numero piu' piccolo",
      "Nel caso in cui invoquiamo la dup2(2) settando a NULL il valore del nuovo file descriptor",
      "Nel caso in cui gli passiamo gli stessi parametri."
    ],
    "correct_index": 1,
    "explanation": "*Argomento: System Call I/O*\n\n**Perché la risposta è corretta:**\nLe due system call hanno firme differenti: `dup(oldfd)` e `dup2(oldfd, newfd)`. `dup` duplica sempre sul descrittore libero con numero minore, mentre `dup2` costringe la duplicazione sul descrittore `newfd` specificato (eventualmente chiudendolo se già aperto). Non c'è modo di farle comportare esattamente allo stesso modo se non implementando logiche esterne.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (Nel caso in cui invoquiamo la dup2(2) settando a NULL il valore del nuovo file descriptor):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nel caso in cui gli passiamo gli stessi parametri.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 62,
    "topic": "Locking dei File",
    "question": "Si consideri il seguente frammento di codice:\n```c\nchar* file = argv[1];\nint fd;\nstruct flock lock;\nfd = open (file, O_WRONLY);\nmemset (&lock, 0, sizeof(lock));\nlock.l_type = F_WRLCK;\nfcntl (fd, F_GETLK, &lock);\n```\nQuale e' il comportamento della system call `fcntl`?",
    "options": [
      "Verifica se sul file file e' già presente un lock descritto dalla struttura lock. Se nessun processo detiene un lock su file acquisisce il lock.",
      "Verifica se sul file file e' già' presente un lock descritto dalla struttura lock. In caso affermativo il lock viene rimosso ed il lock richiesto dal processo in esecuzione viene acquisito.",
      "Verifica se sul file file e' già presente un lock descritto dalla struttura lock. Se nessun processo detiene un lock su file, restituisce F_UNLOCK nel campo l_type di lock.",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Locking dei File*\n\n**Perché la risposta è corretta:**\nIl comando `F_GETLK` non acquisisce alcun lock, serve solo per testare la fattibilità di un lock. Se nessun altro processo detiene un lock in conflitto, la struttura passata viene aggiornata impostando il tipo di lock (`l_type`) a `F_UNLOCK`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Verifica se sul file file e' già presente un lock descritto dalla struttura lock. Se nessun processo detiene un lock su file acquisisce il lock.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Verifica se sul file file e' già' presente un lock descritto dalla struttura lock. In caso affermativo il lock viene rimosso ed il lock richiesto dal processo in esecuzione viene acquisito.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 63,
    "topic": "System Call waitpid",
    "question": "Nel caso in cui la system call\n`pid_t waitpid(pid_t pid, int *status, int options);`\nsia invocata con valore di `pid` uguale a -1. Quale e' il suo comportamento?",
    "options": [
      "Attende la terminazione di un qualunque processo figlio",
      "Attende la terminazione di qualunque processo figlio il cui gruppo ID del processo sia diverso da quello del processo chiamante",
      "Nessuna risposta (0 Punti)",
      "Attende la terminazione di qualunque processo figlio il cui gruppo ID del processo sia uguale a quello del processo chiamante"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: System Call waitpid*\n\n**Perché la risposta è corretta:**\nPassare `-1` come primo parametro a `waitpid` indica al sistema di attendere la terminazione di un qualsiasi processo figlio dello stesso processo chiamante, comportandosi esattamente come la system call `wait`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Attende la terminazione di qualunque processo figlio il cui gruppo ID del processo sia diverso da quello del processo chiamante):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (Attende la terminazione di qualunque processo figlio il cui gruppo ID del processo sia uguale a quello del processo chiamante):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 64,
    "topic": "System Call fork",
    "question": "Si consideri il seguente frammento di codice\n```c\npid_t pID = fork();\nif (pID == 0) {\n    Blocco_1\n} else if (pID < 0) {\n    Blocco_2\n} else {\n    Blocco_3\n}\n```\nQuale blocco di codice (tra Blocco_1, Blocco_2 e Blocco_3) verra' eseguito dal processo figlio?",
    "options": [
      "Blocco_2",
      "Blocco_1",
      "Blocco_3",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: System Call fork*\n\n**Perché la risposta è corretta:**\nNel processo figlio creato da `fork()`, il valore di ritorno restituito dalla chiamata di sistema è `0`. Pertanto, viene eseguito il blocco all'interno del ramo `if (pID == 0)`, ovvero `Blocco_1`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Blocco_2):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Blocco_3):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 65,
    "topic": "System Call fork",
    "question": "Si consideri il seguente frammento di codice\n```c\npid_t pID = fork();\nif (pID == 0) {\n    Blocco_1\n} else if (pID < 0) {\n    Blocco_2\n} else {\n    Blocco_3\n}\n```\nQuale blocco di codice (tra Blocco_1, Blocco_2 e Blocco_3) verra' eseguito dal processo padre?",
    "options": [
      "Blocco_3",
      "Nessuna risposta (0 punti)",
      "Blocco_2",
      "Blocco_1"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: System Call fork*\n\n**Perché la risposta è corretta:**\nNel processo padre, `fork()` restituisce il PID (maggiore di 0) del processo figlio appena creato. Essendo il valore positivo, viene intrapreso il ramo `else`, eseguendo `Blocco_3`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (Blocco_2):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Blocco_1):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 66,
    "topic": "System Call execve",
    "question": "Quali dei seguenti attributi di un processo non e' preservato a seguito di una chiamata a `execve()`?",
    "options": [
      "Groups id",
      "Memory mapping",
      "File locks",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: System Call execve*\n\n**Perché la risposta è corretta:**\nLa chiamata `execve` sostituisce interamente l'immagine del processo corrente con quella di un nuovo programma, cancellando completamente il vecchio spazio di indirizzamento virtuale, comprese tutte le mappature di memoria (`memory mapping`). I descrittori dei file (e i relativi lock) rimangono di norma aperti, a meno che non sia attivo il flag `close-on-exec`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Groups id):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (File locks):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 67,
    "topic": "Privilegi di Amministrazione",
    "question": "Quale è la differenza tra i comandi `sudo` e `su`?",
    "options": [
      "sudo è un comando che permette di eseguire altri comandi come root. su è una scorciatoia per aprire una shell come utente root.",
      "su permette di eseguire un comando con uno user e group ID sostitutivo. sudo permette ad un utente autorizzato di eseguire un comando come super utente o come altro utente, come definito dalla politica di sicurezza.",
      "Nessuna risposta (0 punti)",
      "sudo e su permettono sostanzialmente di fare le stesse cose, come eseguire un comando come super utente o come altro utente, sempre come specificato dalla politica di sicurezza."
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Privilegi di Amministrazione*\n\n**Perché la risposta è corretta:**\nIl comando `sudo` consente ad un utente abilitato di lanciare singoli comandi amministrativi (tramite la propria password di utente), mentre `su` consente di avviare direttamente una nuova shell interattiva acquisendo l'identità dell'utente di destinazione (richiedendo la password di root).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (sudo è un comando che permette di eseguire altri comandi come root. su è una scorciatoia per aprire una shell come utente root.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione D (sudo e su permettono sostanzialmente di fare le stesse cose, come eseguire un comando come super utente o come altro utente, sempre come specificato dalla politica di sicurezza.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 68,
    "topic": "Generale",
    "question": "Quale dei seguenti dichiarazioni di variabile e'  non  valida, generando quindi un errore di compilazione?",
    "options": [
      "float g_shock=9.89;",
      "float g__shock=9.89;",
      "Nessuna risposta (0 Punti)",
      "float g-shock=9.89;"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'float g-shock=9.89;'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (float g_shock=9.89;):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (float g__shock=9.89;):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 69,
    "topic": "Generale",
    "question": "Si consideri il frammento di codice:\n\n```c\nint K=10, c=0, p=1;\nwhile (++K > 10)\n    c=c+1;\np--;\n```\n\nche valore conterrà la variabile K al termine dell'esecuzione del frammento di codice?",
    "options": [
      "10",
      "11",
      "Nessuna risposta (0 punti)",
      "L’esecuzione del frammento di codice non termina perché il ciclo entra in un loop infinito."
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'L'esecuzione del frammento di codice non termina perché il ciclo entra in un loop infinito.'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (10):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (11):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 70,
    "topic": "Gestione Stringhe",
    "question": "Quali di queste due assegnazioni inizializza correttamente una stringa?\n\n1. `char r[10]={'L','9',' ','4','a','p','r'};`\n2. `char r[10]=\"L9 4apr\";`",
    "options": [
      "entrambe",
      "La 2.",
      "La 1.",
      "Nessuna risposta (0 Punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Gestione Stringhe*\n\n**Perché la risposta è corretta:**\nLa seconda assegnazione (`char r[10]=\"L9 4apr\";`) inizializza correttamente una stringa perché racchiude i caratteri tra doppi apici, determinando l'inserimento automatico del carattere terminatore nullo '\\0' alla fine dell'array. La prima inizializzazione con parentesi graffe senza il carattere '\\0' crea un semplice array di caratteri, ma non una stringa valida.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (entrambe):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (La 1.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 71,
    "topic": "Preprocessore e compilazione",
    "question": "Si consideri il comando `gcc -c file.c -o file.o`. Quali delle seguenti affermazioni e’ falsa?",
    "options": [
      "Il comando produce un file oggetto.",
      "Nessuna risposta (0 punti)",
      "Il comando produce un file oggetto senza informazioni per il debug.",
      "Il comando produce un file eseguibile."
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Preprocessore e compilazione*\n\n**Perché la risposta è corretta:**\nLa compilazione con il flag -c dice a gcc di compilare solo il codice sorgente in file oggetto (.o) senza invocare il linker. Pertanto, non viene prodotto alcun file eseguibile, rendendo questa affermazione falsa (e quindi corretta).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il comando produce un file oggetto.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione C (Il comando produce un file oggetto senza informazioni per il debug.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 72,
    "topic": "Preprocessore e compilazione",
    "question": "Si consideri il comando `gcc -c file.c -o file.o`. Quali delle seguenti affermazioni e’ vera?",
    "options": [
      "Il comando produce un file oggetto.",
      "Nessuna risposta (0 punti)",
      "Il comando produce un file eseguibile.",
      "Il comando produce un file precompilato."
    ],
    "correct_index": 0,
    "explanation": "Il comando `gcc -c file.c -o file.o` esegue la compilazione del file sorgente `file.c` per produrre il file oggetto `file.o`. L'opzione `-c` indica specificamente a `gcc` di arrestarsi dopo la fase di compilazione/assemblaggio, senza invocare il linker per produrre un eseguibile.\n\n**Analisi delle opzioni:**\n- **Opzione A (Corretta):** Compila il file in un file oggetto senza invocare il linker.\n- **Opzione B, C, D (Errate):** Le opzioni che menzionano l'esecuzione del linker o la creazione diretta di un file eseguibile completo sono errate in quanto l'opzione `-c` inibisce la fase di linking."
  },
  {
    "id": 73,
    "topic": "Memoria Dinamica",
    "question": "Consideri il seguente frammento di codice:\n\n```c\nint *ptr = malloc(sizeof(int));\nptr = ptr+1;\n```\n\nassumendo la `malloc` assegni a `ptr` la locazione di memoria `0x55c2b1268420`, cosa contiene `ptr` dopo l’incremento?",
    "options": [
      "0x55c2b1268424",
      "l'incremento della variabile prt genera un errore di segmentazione in fase di esecuzione",
      "0x55c2b1268421",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Memoria Dinamica*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è '0x55c2b1268424'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (l'incremento della variabile prt genera un errore di segmentazione in fase di esecuzione):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (0x55c2b1268421):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 74,
    "topic": "Gestione Stringhe",
    "question": "Quale delle seguenti dichiarazioni di variabile inizializza una stringa?",
    "options": [
      "char r[10] = {`L´,`9´,` ´,`4´,`a´,`p`,`r´};",
      "char r[] = {`L´,`9´,` ´,`4´,`a´,`p`,`r´};",
      "char r[] = ``L9 4apr´´;",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Gestione Stringhe*\n\n**Perché la risposta è corretta:**\nLa dichiarazione `char r[] = \"L9 4apr\";` inizializza correttamente una stringa. In C, l'uso delle virgolette doppie indica una stringa letterale, e il compilatore aggiunge automaticamente il carattere terminatore nullo '\\0' al termine dell'array. L'uso delle parentesi graffe con singoli caratteri richiede che '\\0' sia esplicitato alla fine, altrimenti l'array non sarà una stringa valida.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (char r[10] = {`L´,`9´,` ´,`4´,`a´,`p`,`r´};):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (char r[] = {`L´,`9´,` ´,`4´,`a´,`p`,`r´};):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 75,
    "topic": "Puntatori",
    "question": "Si considerino le seguenti dichiarazioni di variabili:\n\n```c\nint vect[10];\nint *ptr = NULL;\n```\n\nQuale delle seguenti assegnazioni e' corretta per far si' che `ptr` contenga il puntatore al vettore `vect`?",
    "options": [
      "Nessuna risposta (0 punti)",
      "ptr = vect[1];",
      "ptr = vect;",
      "ptr = &vect"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Puntatori*\n\n**Perché la risposta è corretta:**\nIn linguaggio C, il nome di un array (`vect`) quando utilizzato in un'espressione decade automaticamente in un puntatore al suo primo elemento (`&vect[0]`), che è di tipo `int *`. Pertanto, l'assegnamento `ptr = vect;` è sintatticamente corretto e assegna a `ptr` l'indirizzo di inizio del vettore.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (ptr = vect[1];):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (ptr = &vect):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 76,
    "topic": "Scope delle Variabili",
    "question": "Quale delle seguenti affermazioni sulle variabili  statiche esterne  e' vera?",
    "options": [
      "Sono variabili statiche dichiarate al di fuori di ogni funzione (in un dato file sorgente).",
      "Nessuna risposta (0 punti)",
      "Sono inizializzate a 0 quando sono usate da funzioni presenti in altri file.",
      "Sono visibili dal punto di dichiarazione fino alla fine del file sorgente."
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Scope delle Variabili*\n\n**Perché la risposta è corretta:**\nLe variabili statiche esterne (dichiarate con `static` al di fuori di qualsiasi funzione) hanno visibilità limitata al solo file sorgente in cui sono dichiarate.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (Sono inizializzate a 0 quando sono usate da funzioni presenti in altri file.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Sono visibili dal punto di dichiarazione fino alla fine del file sorgente.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 77,
    "topic": "Puntatori a Funzione",
    "question": "Quale delle seguenti affermazioni e' vera sui  puntatori a funzione ?",
    "options": [
      "I puntatori a funzione sono definibili solo per funzione senza parametri.",
      "Nessuna risposta (0 punti)",
      "Il C non supporta i puntatori a funzione, perché le funzioni C non sono variabili.",
      "Una funzione statica non e' visibile al di fuori del file sorgente in cui e' definita."
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Puntatori a Funzione*\n\n**Perché la risposta è corretta:**\nUna funzione dichiarata con la parola chiave `static` in C ha collegamento interno, ovvero la sua visibilità è limitata al solo file sorgente in cui è definita. Le altre opzioni sui puntatori a funzione sono false (il C supporta i puntatori a funzione e possono avere parametri).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (I puntatori a funzione sono definibili solo per funzione senza parametri.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione C (Il C non supporta i puntatori a funzione, perché le funzioni C non sono variabili.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 78,
    "topic": "Strutture di Controllo",
    "question": "Il C permette la definizione e l'uso di funzioni ricorsive?",
    "options": [
      "Si', ma solo se la funzione non ha variabili locali.",
      "Nessuna risposta (0 punti)",
      "Si', senza alcun problema.",
      "No, perché la ricorsione e' molto inefficiente."
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Strutture di Controllo*\n\n**Perché la risposta è corretta:**\nIl C supporta la ricorsione senza limitazioni sulle variabili locali. Ad ogni chiamata viene allocato un nuovo frame sullo stack con le proprie variabili locali.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Si', ma solo se la funzione non ha variabili locali.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione D (No, perché la ricorsione e' molto inefficiente.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 79,
    "topic": "Comandi Unix",
    "question": "Supponiamo di voler creare un file vuoto e di voler settare il tempo di ultimo  accesso  al  \"2  giugno 2020 ore 12:00\".  Quale dei  seguenti comandi e’ corretto?",
    "options": [
      "touch -at202006021200 filename",
      "touch -cat202006021200 filename",
      "Nessuna risposta (0 punti)",
      "touch -ct202006021200 filename"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Comandi Unix*\n\n**Perché la risposta è corretta:**\nIl comando `touch -atYYYYMMDDhhmm` imposta l'access time al valore specificato, creando il file se non esiste.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (touch -cat202006021200 filename):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (touch -ct202006021200 filename):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 80,
    "topic": "Permessi Unix",
    "question": "I\npermessi di accesso della  directory  /tmp \nsono ﻿ 1777/drwxrwxrwt  . Cosa significa?",
    "options": [
      "Lo sticky bit e' settato",
      "Il bit SetGid e' settato",
      "Nessuna risposta (0 punti)",
      "Lo sticky bit non e' settato"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Permessi Unix*\n\n**Perché la risposta è corretta:**\nI permessi `1777` (simbolicamente `drwxrwxrwt`) indicano che lo Sticky Bit (rappresentato dal valore ottale 1 e dalla lettera `t`) è attivo sulla cartella `/tmp`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Il bit SetGid e' settato):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (Lo sticky bit non e' settato):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 81,
    "topic": "Comandi Unix",
    "question": "Quali dei seguenti comandi permette di creare un intero path di directory? (# e' il prompt della shell.)",
    "options": [
      "# mkdir -p /dir1/dir2/dir3",
      "Nessuna risposta (0 punti)",
      "# mkdir /dir1/dir2/dir3",
      "# mkdir -m /dir1/dir2/dir3"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Comandi Unix*\n\n**Perché la risposta è corretta:**\nL'opzione `-p` (parents) del comando `mkdir` crea tutte le directory intermedie necessarie se non esistono già.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (# mkdir /dir1/dir2/dir3):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (# mkdir -m /dir1/dir2/dir3):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 82,
    "topic": "Comandi Unix",
    "question": "Quali dei seguenti comandi  change dir  usa un path assoluto? (# indica il prompt di sistema)",
    "options": [
      "# cd ../studente/download",
      "Nessuna risposta (0 punti)",
      "# cd Immagini/../Immagini/faces/",
      "# cd ~/Lezione1/esempi/filesystem"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Comandi Unix*\n\n**Perché la risposta è corretta:**\nLa tilde `~` viene espansa dalla shell nel percorso assoluto della home dell'utente corrente, qualificando un percorso assoluto indipendente dalla directory corrente.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (# cd ../studente/download):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione C (# cd Immagini/../Immagini/faces/):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 83,
    "topic": "Generale",
    "question": "Assumete di voler visualizzare il numero di  inode  di un file, quale dei seguenti comandi  non produce  l'output desiderato?",
    "options": [
      "Nessuna risposta (0 punti)",
      "stat -f nomefile",
      "stat nomefile",
      "ls -l -i nomefile"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'stat -f nomefile'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (stat nomefile):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (ls -l -i nomefile):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 84,
    "topic": "System Call e File",
    "question": "Si consideri il codice:\n\n```c\nstruct stat *s;\nfd = open(\"filename\", O_RDONLY);\nfstat(fd, s);\n```\n\nCome faccio a sapere se il file “filename” e’ un link?",
    "options": [
      "Se s.st_size == 0",
      "Se S_ISLNK(s)==1",
      "Nessuna risposta (0 punti)",
      "Se s.st_nlink == 1"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nPer verificare se un file è un link simbolico a partire dalla struttura `stat`, si utilizza la macro standard `S_ISLNK(s->st_mode)`. Si noti che nel codice fornito c'è una svista (la macro dovrebbe valutare `s->st_mode`), ma l'opzione corretta intesa dal quesito fa uso di `S_ISLNK`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Se s.st_size == 0):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione D (Se s.st_nlink == 1):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 85,
    "topic": "Segnali",
    "question": "Supponiamo di voler modificare il gestore (handler) di un segnale. Quale system call, o combinazione di system call, è possibile utilizzare tra quelle di seguito riportate?",
    "options": [
      "sigaction(2) seguita da una fork(2) che esegue l’handler del segnale",
      "sigaction(2)",
      "Nessuna risposta (0 punti)",
      "signal(2) seguita da una fork(2) che esegue l’handler del segnale"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Segnali*\n\n**Perché la risposta è corretta:**\nPer modificare la gestione di un segnale si utilizza `sigaction(2)` (o `signal(2)`). Non occorre eseguire alcuna `fork(2)` in quanto l'handler è eseguito dal kernel all'interno dello stesso processo.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (sigaction(2) seguita da una fork(2) che esegue l’handler del segnale):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione D (signal(2) seguita da una fork(2) che esegue l’handler del segnale):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 86,
    "topic": "POSIX Threads",
    "question": "Si consideri il seguente frammento di codice (i numeri a lato sono i numeri di riga delle istruzioni):\n\n```c\n1. pthread_t tid;\n2. pthread_create(&tid, ... )\n3. pthread_create(&tid, ... )\n4. pthread_join(tid, ...);\n5. printf(\"joined\");\n```\n\nquale delle seguenti affermazioni e’ vera?",
    "options": [
      "Nessuna risposta (0 punti)",
      "La stringa “joined” e’ inviata su stdout quando uno dei due thread (non importa quale) e’ terminato",
      "La stringa “joined” e’ inviata su stdout quando entrambi i thread sono terminati",
      "La stringa “joined” e’ inviata su stdout solo quando il thread creato a riga 3. e’ terminato"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: POSIX Threads*\n\n**Perché la risposta è corretta:**\nLa variabile `tid` viene sovrascritta alla riga 3 con l'identificatore del secondo thread. La chiamata `pthread_join(tid, ...)` esegue l'attesa solo sul thread memorizzato in `tid` in quel momento (ossia il secondo thread, creato alla riga 3). Pertanto, l'affermazione secondo cui 'joined' viene stampato solo quando il thread creato a riga 3 è terminato è l'unica affermazione VERA.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione B (La stringa “joined” e’ inviata su stdout quando uno dei due thread (non importa quale) e’ terminato):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (La stringa “joined” e’ inviata su stdout quando entrambi i thread sono terminati):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 87,
    "topic": "System Call e File",
    "question": "Si consideri il seguente frammento di codice:\n\n```c\nstruct stat *s;\nfd = open(\"filename\", O_RDONLY);\nfchmod(fd, 00744);\nfstat(fd, s);\n```\n\nper visualizzare su stdout i permessi di accesso a “filename”, quale tra le seguenti opzioni e’ corretta?",
    "options": [
      "printf(\"New File mode %o\\n\",s.st_mode);",
      "Nessuna risposta (0 punti)",
      "printf(\"New File mode %x\\n\",s.st_mode);",
      "printf(\"New File mode %s\\n\",s.st_mode);"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: System Call e File*\n\n**Perché la risposta è corretta:**\nI permessi dei file in Unix vengono comunemente rappresentati in formato ottale (es. 0744). Pertanto, per visualizzare correttamente i bit di modalità (`st_mode`) come valore ottale, si utilizza lo specificatore di formato `%o` nella funzione `printf`.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (printf(\"New File mode %x\\n\",s.st_mode);):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (printf(\"New File mode %s\\n\",s.st_mode);):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 88,
    "topic": "Memoria Dinamica",
    "question": "Quale\ndelle seguenti  funzioni  di libreria  non  alloca nell’heap?",
    "options": [
      "Nessuna risposta (0 punti)",
      "void *malloc( size_t size );",
      "void *alloca( size_t size );",
      "void *calloc( size_t nmemb, size_t size );"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Memoria Dinamica*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'void *alloca( size_t size );'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (void *malloc( size_t size );):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (void *calloc( size_t nmemb, size_t size );):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 90,
    "topic": "I/O e File Locking",
    "question": "Si consideri il seguente frammento di codice:\n\n```c\nint fd, fd1;\nstruct stat buf, buf1;\nfd = open(\"filename\", O_RDWR);\nfd1 = dup(fd);\nfstat(fd, &buf);\nfstat(fd1, &buf1);\n```\n\nquale delle seguenti affermazioni e’ vera?",
    "options": [
      "buf.st_ino e’ diverso da buf1.st_ino",
      "Nessuna risposta (0 punti)",
      "st_ino non e’ membro della struttura stat",
      "buf.st_ino e' uguale a buf1.st_ino"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: I/O e File Locking*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'buf.st_ino e' uguale a buf1.st_ino'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (buf.st_ino e’ diverso da buf1.st_ino):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione C (st_ino non e’ membro della struttura stat):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 91,
    "topic": "Segnali",
    "question": "Si assuma di avere due shell aperte, etichettate come `shell_1` e `shell_2`, e si consideri la seguente sequenza di comandi (`shell_i:cmd` indica che `cmd` e' eseguito nella shell `i`, `i=1,2`):\n\n```bash\nshell_1: xterm\nshell_2: ps -C xterm # restituisce xtermPID\nshell_2: kill -s SIGINT xtermPID\n```\n\nQuale e’ il loro effetto?",
    "options": [
      "Il processo xterm viene terminato con segnale SIGINT",
      "Il processo xterm viene eseguito in background",
      "Nessuna risposta (0 punti)",
      "Il processo xterm viene portato nello stato Interrupted (I)"
    ],
    "correct_index": 0,
    "explanation": "Il comando `kill` con il segnale `SIGINT` (segnale 2) inviato al processo `xterm` ne causa la terminazione immediata, a meno che il processo non abbia implementato una gestione specifica del segnale per ignorarlo o gestirlo in altro modo. Di default, `SIGINT` termina il processo.\n\n**Analisi delle opzioni:**\n- **Opzione A (Corretta):** Causa la terminazione immediata del processo xterm.\n- **Opzione B, C, D (Errate):** Il processo non viene fermato (SIGSTOP) né mandato in background (SIGCONT o job control), ma viene interrotto e terminato."
  },
  {
    "id": 92,
    "topic": "Memoria Dinamica",
    "question": "Consideriamo la seguente invocazione della funzione `realloc`:\n\n```c\nstrptr1 = (char *) realloc(strptr, 10 * SIZE_OF_ARRAY);\n```\n\nstrptr1 puo' essere diverso da strptr?",
    "options": [
      "Si', se a seguito del ridimensionamento della memoria allocata non e' possibile trovare un numero sufficiente di locazioni contigue a partire dal strptr",
      "No, strptr1 e' sempre uguale a strptr",
      "Nessuna risposta (0 Punti)",
      "Si', la realloc modifica sempre l'indirizzo di partenza dell'area di memoria ridimensionata"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Memoria Dinamica*\n\n**Perché la risposta è corretta:**\nLa funzione `realloc(void *ptr, size_t size)` serve a ridimensionare (espandere o contrarre) un blocco di memoria precedentemente allocato dinamicamente sullo heap.\n\nEcco come opera effettivamente il comando e perché la risposta selezionata è corretta:\n1. **Tentativo di espansione in-place**: `realloc` verifica prima se c'è abbastanza spazio libero contiguo immediatamente dopo il blocco di memoria attuale `strptr`. Se tale spazio è disponibile, il blocco viene esteso sul posto, e l'indirizzo restituito `strptr1` rimarrà identico a `strptr`.\n2. **Allocazione di un nuovo blocco**: Se non c'è abbastanza spazio contiguo contiguo sul posto, `realloc` alloca un nuovo blocco di memoria di dimensioni adeguate in un'altra area dello heap, copia i dati esistenti dal vecchio blocco al nuovo, rilascia (effettua la `free` di) `strptr` e restituisce il puntatore al nuovo indirizzo `strptr1` (che sarà quindi diverso da `strptr`).\n3. **Fallimento**: Se lo heap non ha abbastanza spazio complessivo, `realloc` restituisce `NULL` (anche in questo caso diverso da `strptr`), ma lascia intatto il blocco di memoria originale senza liberarlo.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (No, strptr1 e' sempre uguale a strptr):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (Si', la realloc modifica sempre l'indirizzo di partenza dell'area di memoria ridimensionata):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 93,
    "topic": "Gestione Memoria Dinamica",
    "question": "Un processo puo' allocare memoria nello stack?",
    "options": [
      "Nessuna risposta (0 Punti)",
      "Si', mediante la funziona di libreria malloc(3)",
      "Si', mediante la funzione di libreria alloca(3)",
      "No, un processo può allocare memoria sono nell'heap"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Gestione Memoria Dinamica*\n\n**Perché la risposta è corretta:**\nLa funzione `alloca(3)` alloca memoria dinamica direttamente sullo stack frame del chiamante, liberandola automaticamente al ritorno della funzione.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (Si', mediante la funziona di libreria malloc(3)):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (No, un processo può allocare memoria sono nell'heap):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 94,
    "topic": "Processi",
    "question": "Quale  attributi di un processo non sono ereditati dal processo figlio?",
    "options": [
      "Real ed effective user e group ID; working directory; ambiente del processo",
      "I timer, i record lock e i memory lock; i contatori delle risorse",
      "Nessuna risposta (0 Punti)",
      "Descrittori dei file; terminale di controllo; memoria condivisa"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Processi*\n\n**Perché la risposta è corretta:**\nIl processo figlio non eredita i timer pendenti, i record lock (fcntl) e i memory lock, né i contatori delle risorse.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Real ed effective user e group ID; working directory; ambiente del processo):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione D (Descrittori dei file; terminale di controllo; memoria condivisa):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 95,
    "topic": "Gestione Utenti",
    "question": "Quale  e’ la differenza tra i comandi  sudo   e  su   ?",
    "options": [
      "Nessuna risposta (0 punti)",
      "su è un comando che permette di cambiare utente. sudo è un comando che permette di eseguire altri comandi come super-utente (root).",
      "sudo si riferisce ad un gruppo di utenti. su è invece un comando che permette di cambiare utente.",
      "sudo è un comando che permette di eseguire altri comandi come root . su è una scorciatoia per invocare il comando sudo ."
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Gestione Utenti*\n\n**Perché la risposta è corretta:**\nsu permette di cambiare l'utente corrente aprendo una nuova shell, mentre sudo consente ad utenti autorizzati di eseguire specifici comandi con i privilegi di super-utente.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (sudo si riferisce ad un gruppo di utenti. su è invece un comando che permette di cambiare utente.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (sudo è un comando che permette di eseguire altri comandi come root . su è una scorciatoia per invocare il comando sudo .):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 96,
    "topic": "Comandi Unix",
    "question": "In quale sezione del man sono descritte le  chiamate di sistema  di Unix/Linux?",
    "options": [
      "Nessuna risposta (0 punti)",
      "2",
      "7",
      "3"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Comandi Unix*\n\n**Perché la risposta è corretta:**\nLa sezione 2 del manuale Unix (man) descrive le chiamate di sistema (system call), mentre la sezione 3 descrive le funzioni di libreria standard.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (7):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (3):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 97,
    "topic": "Gestione Utenti",
    "question": "Si supponga di eseguire la sequenza di comandi\n```bash\nsudo adduser utente1\nsudo adduser utente1 studente\n```\n\nQuale sarà il risultato?",
    "options": [
      "Il primo comando crea l'utente ed il gruppo utente1; il secondo comando aggiunge l'utente utente1 al gruppo studente. Se il gruppo studente non esiste lo crea.",
      "Nessuna risposta (0 punti)",
      "Il primo comando crea l'utente ed il gruppo utente1; il secondo comando aggiunge l'utente utente1 al gruppo studente solo se il gruppo studente già esiste.",
      "Il primo comando crea l'utente utente1 ed il gruppo utente1; il secondo comando da errore"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Gestione Utenti*\n\n**Perché la risposta è corretta:**\nIl comando `adduser` (uno script Perl di alto livello) crea l'utente ed il relativo gruppo primario (con lo stesso nome). Se invocato come `adduser utente gruppo`, aggiunge l'utente al gruppo specificato solo se quest'ultimo esiste già, altrimenti fallisce.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il primo comando crea l'utente ed il gruppo utente1; il secondo comando aggiunge l'utente utente1 al gruppo studente. Se il gruppo studente non esiste lo crea.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione D (Il primo comando crea l'utente utente1 ed il gruppo utente1; il secondo comando da errore):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 98,
    "topic": "Generale",
    "question": "Quanti\njob in background crea il comando seguente?\n```bash\nsleep 30 | sleep 15 | sleep 10 &\n```",
    "options": [
      "Nessuna risposta (0 punti)",
      "3",
      "1",
      "Nessuno, da' errore"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nL'intero costrutto in pipeline (`sleep 30 | sleep 15 | sleep 10`) viene eseguito in background come un singolo job complessivo, identificato da un unico Job ID, anche se al suo interno vengono avviati tre processi separati legati tramite pipe.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (3):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuno, da' errore):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 99,
    "topic": "Compilazione e Preprocessore",
    "question": "Assumiamo di compilare un file .c nei seguenti modi\n\n```bash\ngcc file.c -o file1.o\ngcc -g file.c -o file2.o\n```\nPerche' le dimensioni di file1.o e file2.o sono diverse?",
    "options": [
      "Nessuna risposta (0 Punti)",
      "Perché file2.o contiene informazioni aggiuntive rispetto a file1.o necessarie per il debug",
      "Non e' vero che i due comandi di compilazione producono file di dimensioni diverse",
      "Perché file2.o e' stato ottimizzato, per occupare meno spazio in memoria, rispetto a file1.o"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Compilazione e Preprocessore*\n\n**Perché la risposta è corretta:**\nL'opzione `-g` indica al compilatore `gcc` di includere le informazioni di debug (simboli, associazioni righe-istruzioni) all'interno dell'eseguibile, aumentandone le dimensioni rispetto a una compilazione standard.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 Punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (Non e' vero che i due comandi di compilazione producono file di dimensioni diverse):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Perché file2.o e' stato ottimizzato, per occupare meno spazio in memoria, rispetto a file1.o):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 100,
    "topic": "Compilazione e Preprocessore",
    "question": "Supponiamo di avere il seguente makefile (memorizzato in un file di nome makefile):\n\n```makefile\nmerge_sorted_lists: merge_sorted_lists.c\n    gcc -Wall -Wextra -O3 merge_sorted_lists.c -o merge_sorted_lists\nsort_file_int: sort_file_int.c\n    gcc -Wall -Wextra -O3 sort_file_int.c -o sort_file_int\n.PHONY: clean\nclean:\n    rm -f *.o merge_sorted_lists\n```\nIn quali condizioni viene eseguito il target sort_file_int?",
    "options": [
      "Il target sort_file_int non verrà mai eseguito",
      "Nessuna risposta (0 punti)",
      "Sempre, se invochiamo il comando make sort_file_int",
      "Se invochiamo il comando make sort_file_int e se sort_file_int.c e' stato modificato dopo la data di creazione di sort_file_int.o"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Compilazione e Preprocessore*\n\n**Perché la risposta è corretta:**\nNel Makefile, le dipendenze determinano l'esecuzione del target. Se viene invocato `make sort_file_int`, il compilatore esegue la compilazione solo se il file sorgente (`sort_file_int.c`) ha una data di modifica più recente del file oggetto (`sort_file_int.o`).\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il target sort_file_int non verrà mai eseguito):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione C (Sempre, se invochiamo il comando make sort_file_int):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 101,
    "topic": "Compilazione e Preprocessore",
    "question": "Cosa\nproduce il seguente comando? \n```bash\ngcc file1.o file2.o file3.o\n```",
    "options": [
      "Un file eseguibile a.out.",
      "Nulla, la sintassi del comando e' sbagliata.",
      "Nessuna risposta (0 punti)",
      "Fa il linking dei file oggetto ma non produce nessun risultato finché non si specifica l'output."
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Compilazione e Preprocessore*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'Un file eseguibile a.out.'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nulla, la sintassi del comando e' sbagliata.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (Fa il linking dei file oggetto ma non produce nessun risultato finché non si specifica l'output.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 102,
    "topic": "Memoria Dinamica",
    "question": "Supponiamo di aver utilizzato, nella nostra funzione C,  la  funzione di libreria alloca(3) per allocare un'area di memoria.E' necessario liberare tale area di memoria mediante una free(3) prima della terminazione della funzione?",
    "options": [
      "No, deve essere invocata la funzione dealloca(3)",
      "No. l'area di memoria allocata nello stack viene liberata automaticamente",
      "Si. Bisogna sempre liberare la memoria per evitare dei memory leak",
      "Nessuna risposta"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Memoria Dinamica*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'No. l'area di memoria allocata nello stack viene liberata automaticamente'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (No, deve essere invocata la funzione dealloca(3)):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Si. Bisogna sempre liberare la memoria per evitare dei memory leak):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 103,
    "topic": "Permessi del Filesystem",
    "question": "Assumiamo di avere un file eseguibile il cui proprietario e' l'utente `root`, ad esempio:\n`-rwxr-xr-x 1 root root 60296 feb 22 2017 /bin/chmod`\n\nAffinché l'effective UID del processo cambi quando eseguito da un utente senza privilegi di root cosa bisogna fare?",
    "options": [
      "Nessuna risposta (0 punti)",
      "Impostare il permesso speciale Setuid bit",
      "Non occorre fare nulla perché quello descritto e' il comportamento standard, ovvero l'effective UID cambia sempre in quello dell'utente che esegue il file.",
      "Impostare il permesso speciale stiky bit"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Permessi del Filesystem*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'Impostare il permesso speciale Setuid bit'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione C (Non occorre fare nulla perché quello descritto e' il comportamento standard, ovvero l'effective UID cambia sempre in quello dell'utente che esegue il file.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Impostare il permesso speciale stiky bit):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 104,
    "topic": "Generale",
    "question": "Supponiamo di avere un file di nome  filename e di creare un link a filename con il comando\nln filename link1quale delle seguenti affermazioni e' vera?",
    "options": [
      "Nessuna risposta (0 punti)",
      "filename e link1 hanno inode diverso",
      "filename e link1 hanno lo stesso inode",
      "link1 occupa zero blocchi su disco anche se filename ne occupa un numero diverso da 0."
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'filename e link1 hanno lo stesso inode'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (filename e link1 hanno inode diverso):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (link1 occupa zero blocchi su disco anche se filename ne occupa un numero diverso da 0.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 106,
    "topic": "Generale",
    "question": "Assumiamo di avere due shell aperte, etichettate come shell_1 e shell_2 e supponiamo di eseguire la sequenza di comandi che segue (shell_i: cmd indica che cmd e' eseguitto nella shell_i, i=1,2).\n\n```bash\nshell_1: xterm\nshell_2: ps -C xterm\n#restituisce xtermPID\nshell_2: kill -s SIGSTOP xtermPID\nshell_2: kill -s SIGCONT xtermPID\n```\n\nQuale e' il loro effetto sul processo xterm?",
    "options": [
      "Il processo xterm viene prima mandato in esecuzione in background e poi riportato in foreground",
      "Nessuna risposta (0 punti)",
      "Il processo xterm viene mandato in esecuzione in background",
      "Il processo xterm viene prima portato nello stato stopped (T) e poi mandato nuovamente in esecuzione (esecuzione in background)"
    ],
    "correct_index": 3,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'Il processo xterm viene prima portato nello stato stopped (T) e poi mandato nuovamente in esecuzione (esecuzione in background)'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il processo xterm viene prima mandato in esecuzione in background e poi riportato in foreground):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione D risponde in modo esatto e completo al quesito.\n- **Opzione C (Il processo xterm viene mandato in esecuzione in background):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 107,
    "topic": "Generale",
    "question": "In cosa differisce il contenuto  dei file  /etc/mtab e /etc/fstab ?",
    "options": [
      "/etc/mtab contiene i filesystem montati attualmente/etc/fstab contiene i filesystem che vengono montati al boot",
      "/etc/fstab contiene i filesystem montati attualmente; /etc/mtab invece contiene i filesystem che vengono montati al boot",
      "Nessuna risposta (0 punti)",
      "/etc/mtab contiene i filesystem disponibili/etc/fstab contiene i filesystem che vengono montati al boot"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è '/etc/mtab contiene i filesystem montati attualmente/etc/fstab contiene i filesystem che vengono montati al boot'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (/etc/fstab contiene i filesystem montati attualmente; /etc/mtab invece contiene i filesystem che vengono montati al boot):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione D (/etc/mtab contiene i filesystem disponibili/etc/fstab contiene i filesystem che vengono montati al boot):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 108,
    "topic": "I/O e File Locking",
    "question": "Supponiamo di avere il seguente  frammento di codice\n```c\nstruct dirent *dentry; //directory stream\n\tchar *filename;\n\tDIR *dstr=opendir(\"mydir\");\n\twhile ((dentry=readdir(dstr)) != NULL) {\n\t\t/* Memorizza i nome file nella  directory in filename  */\n        }\n```\nQuale delle seguenti istruzioni deve  essere  posta all'interno  del  ciclo while per  memorizzare in filename  il nome dei file  contenuti all'interno della directory mydir ?",
    "options": [
      "filename = dentry --> d_name;",
      "Nessuna risposta (0 punti)",
      "filename = dentry.filename;",
      "filename = dentry --> filename;"
    ],
    "correct_index": 0,
    "explanation": "*Argomento: I/O e File Locking*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'filename = dentry --> d_name;'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione A risponde in modo esatto e completo al quesito.\n- **Opzione C (filename = dentry.filename;):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (filename = dentry --> filename;):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 109,
    "topic": "Generale",
    "question": "Supponiamo\ndi aver dichiarato ed inizializzato la seguenti variabili \n```c\nint x=1, y=7;\n```\nquale delle seguenti espressioni logiche e' vera?",
    "options": [
      "Nessuna risposta (0 punti)",
      "!(x & y == x | y )",
      "x && y == 7",
      "x & y == x && y"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'x && y == 7'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (!(x & y == x | y )):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (x & y == x && y):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 110,
    "topic": "Gestione Utenti",
    "question": "I permessi di accesso del file eseguibile  /usr/bin/passwd sono 4755/-rwsr-xr-x . Cosa significa?",
    "options": [
      "Il bit SetUid non e' settato",
      "Il bit SetUid è settato",
      "Nessuna risposta (0 punti)",
      "Lo sticky bit e' settato"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Gestione Utenti*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'Il bit SetUid è settato'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Il bit SetUid non e' settato):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n- **Opzione D (Lo sticky bit e' settato):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 111,
    "topic": "Generale",
    "question": "Si consideri il seguente frammento di codice, \n\n```c\nint n=2;\nint r=2 * (n++);\nn=2;\nint r1=2 * (++n);\n```\n\nquale valori assumeranno le variabili r e r1 dopo l'esecuzione?",
    "options": [
      "r = r1 = 4",
      "r=4 e r1=6",
      "r=6 e r1=4",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'r=4 e r1=6'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (r = r1 = 4):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione C (r=6 e r1=4):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Nessuna risposta (0 punti)):** È errata in quanto l'opzione B risponde in modo esatto e completo al quesito.\n"
  },
  {
    "id": 112,
    "topic": "Generale",
    "question": "Supponiamo di aver mappato un file in memoria con la system call mmap(2). A cosa serve invocare la msync(2)?",
    "options": [
      "E' necessario invocare sempre la msync(2) se non si vogliono perdere le modifiche fatte in memoria.",
      "Nessuna risposta (0 punti)",
      "Impostando il tipo di mapping a MAP_SHARED la msync(2) permette di scrivere le modifiche su disco prima dell'invocazione di una unmap(2) o prima della chiusura del file descriptor.",
      "Non serve invocare la mysinc perché quando si chiude il file descriptor tutte le modifiche fatte in memoria vengono scritte su disco."
    ],
    "correct_index": 2,
    "explanation": "*Argomento: Generale*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'Impostando il tipo di mapping a MAP_SHARED la msync(2) permette di scrivere le modifiche su disco prima dell'invocazione di una unmap(2) o prima della chiusura del file descriptor.'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (E' necessario invocare sempre la msync(2) se non si vogliono perdere le modifiche fatte in memoria.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione B (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione D (Non serve invocare la mysinc perché quando si chiude il file descriptor tutte le modifiche fatte in memoria vengono scritte su disco.):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 113,
    "topic": "I/O e File Locking",
    "question": "Si consideri il seguente frammento di codice\n```c\nsigset_t set, oset, pset;\n...\nsigemptyset( &set ); \nsigaddset( &set, SIGINT ); \nsigaddset( &set, SIGUSR1 ); \nsigprocmask( SIG_BLOCK, &set, &oset );\n...\n```\nCosa produce come  risultato una volta eseguito?",
    "options": [
      "Nessuna risposta (0 punti)",
      "Termina una sezione critica precedentemente iniziata",
      "Disabilita i segnali SIGINT e SIGUSR1",
      "Disabilita tutti i segnali tranne SIGINT e SIGUSR1"
    ],
    "correct_index": 2,
    "explanation": "*Argomento: I/O e File Locking*\n\n**Perché la risposta è corretta:**\nLa risposta corretta è 'Disabilita i segnali SIGINT e SIGUSR1'. Questa opzione risponde in modo corretto ed esaustivo ai vincoli logici e di sistema posti dal quesito.\n\n**Analisi delle altre opzioni (perché sono errate):**\n- **Opzione A (Nessuna risposta (0 punti)):** È errata in quanto l'opzione C risponde in modo esatto e completo al quesito.\n- **Opzione B (Termina una sezione critica precedentemente iniziata):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n- **Opzione D (Disabilita tutti i segnali tranne SIGINT e SIGUSR1):** Questa opzione non descrive il comportamento corretto o contiene affermazioni che non corrispondono alle specifiche o alle regole del linguaggio C o di Unix/Linux per la situazione descritta.\n"
  },
  {
    "id": 114,
    "topic": "Sistemi Operativi II",
    "question": "A quanti gruppi può appartenere un utente nel SO Linux?",
    "options": [
      "Ad almeno un gruppo",
      "Ad un solo gruppo",
      "A zero o più gruppi",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "In Linux, ogni utente deve essere associato a un gruppo principale (chiamato anche gruppo primario) al momento della sua creazione, il quale è specificato nel file `/etc/passwd`. Di conseguenza, un utente appartiene sempre ad *almeno un gruppo*.\n\n- **Perché l'opzione A è corretta:** Un utente deve per definizione appartenere a un gruppo primario e può opzionalmente essere aggiunto a zero o più gruppi secondari. Quindi il numero minimo di gruppi a cui appartiene è 1 (almeno uno).\n- **Perché le altre opzioni sono errate:** L'opzione B ('Ad un solo gruppo') è errata perché un utente può far parte di molti gruppi secondari (ad esempio per accedere a risorse specifiche come audio, docker, sudo). L'opzione C ('A zero o più gruppi') è errata perché non è possibile avere un utente che appartiene a zero gruppi; il gruppo primario è obbligatorio."
  },
  {
    "id": 115,
    "topic": "System Call e File",
    "question": "Si supponga che nel sistema esiste un gruppo \"studente\" ed anche l'utente \"utente1\". Si supponga quindi di eseguire il comando seguente. Quale delle seguenti affermazioni è sbagliata?\n\n```bash\nadduser utente1 studente\n```",
    "options": [
      "Il comando genera un errore perchè per aggiungere un utente ad un gruppo si puo' utilizzare solo il comando addgroup",
      "Se \"utente1\" non appartiene al gruppo \"studente\" lo aggiunge a tale gruppo altrimenti non lo aggiunge",
      "Aggiunge utente1 al gruppo studente oppure genera un messaggio del tipo L'utente «utente1» fa già parte del gruppo «studente»",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Il comando `adduser` è un'interfaccia ad alto livello (solitamente uno script Perl in Debian/Ubuntu) che facilita la gestione di utenti e gruppi, richiamando internamente utilità a basso livello come `useradd` o `usermod`.\n\n- **Perché l'opzione A è corretta (ovvero è l'affermazione SBAGLIATA):** L'affermazione sostiene che il comando generi errore perché si può usare solo `addgroup` per aggiungere un utente a un gruppo. Questo è falso: `adduser utente gruppo` è una sintassi perfettamente valida e standard in Debian/Ubuntu per aggiungere un utente esistente a un gruppo esistente. Inoltre, `addgroup` serve principalmente a creare nuovi gruppi, non ad associarvi utenti.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione B è corretta (se l'utente non è nel gruppo lo aggiunge, altrimenti non fa nulla). L'opzione C descrive fedelmente il comportamento reale del comando, che restituisce un messaggio informativo se l'utente appartiene già al gruppo."
  },
  {
    "id": 116,
    "topic": "System Call e File",
    "question": "Si supponga che nel sistema esiste un gruppo \"studente\" e non esista ancora l'utente \"utente1\". Si supponga quindi di eseguire il seguente comando. Quale sarà il risultato?\n\n```bash\nsudo adduser utente1 studente\n```",
    "options": [
      "Da errore perchè utente1 non esiste",
      "Crea utente1 e, oltre a creare il gruppo utente1 lo aggiunge al gruppo studente",
      "Crea utente1, lo aggiunge al gruppo studente e non crea il gruppo utente1",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "La sintassi `adduser <utente> <gruppo>` serve esclusivamente ad aggiungere un utente *già esistente* a un gruppo *già esistente*.\n\n- **Perché l'opzione A è corretta:** Poiché `utente1` non è ancora presente nel sistema, il comando `adduser` non può completare l'associazione e restituisce immediatamente un errore del tipo 'L'utente utente1 non esiste'.\n- **Perché le altre opzioni sono errate:** Le opzioni B e C ipotizzano che il comando crei automaticamente l'utente mancante. Questo è errato: `adduser` non crea implicitamente un utente se viene invocato con due argomenti (utente e gruppo). Per creare un utente si usa `adduser <nuovo_utente>` (con un solo argomento)."
  },
  {
    "id": 117,
    "topic": "Gestione Utenti",
    "question": "Supponga di eseguire, come utente sudoer, i seguenti comandi. Quale affermazione è corretta?\n\n```bash\nC1) sudo ls  /home\nC2) sudo su --command='ls /home'\n```",
    "options": [
      "C2 da errore \"comando non trovato\"",
      "C1 e C2 sono equivalenti",
      "C2 esegue una setUID mentre C1 no",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Entrambi i comandi mirano a eseguire il comando `ls /home` con i privilegi di super-utente (root).\n\n- **Perché l'opzione B è corretta:** `C1` esegue direttamente `ls /home` tramite `sudo`, assumendo i privilegi di root per quel singolo comando. `C2` usa `sudo` per diventare root (`su`) ed esegue il comando specificato tramite l'opzione `--command` (o `-c`). In entrambi i casi, l'effetto finale è l'esecuzione di `ls /home` come root, con la stampa dello stesso output su stdout. Quindi sono semanticamente equivalenti.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché `su` supporta l'opzione `--command` (o `-c`), quindi non dà errore \"comando non trovato\". L'opzione C è errata perché il meccanismo SetUID (bit SUID) è una proprietà del file eseguibile (es. `/usr/bin/sudo` o `/usr/bin/su`) e non viene 'eseguito' o alterato in modo diverso tra C1 e C2."
  },
  {
    "id": 118,
    "topic": "Sistemi Operativi II",
    "question": "Di quante sezioni e' composto il man di Linux?",
    "options": [
      "5",
      "7",
      "9",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Il manuale di sistema (man pages) in Linux è tradizionalmente organizzato in 9 sezioni standard numerate da 1 a 9.\n\n- **Perché l'opzione C è corretta:** Le sezioni sono: 1. Comandi utente, 2. System Call (chiamate di sistema), 3. Funzioni di libreria C, 4. File speciali (dispositivi), 5. Formati dei file e file di configurazione, 6. Giochi, 7. Miscellanea, 8. Comandi di amministrazione di sistema, 9. Routine del kernel (non standard/specifiche Linux).\n- **Perché le altre opzioni sono errate:** I numeri 5 e 7 non corrispondono al numero totale delle sezioni storiche del manuale Unix/Linux, che sono 9."
  },
  {
    "id": 119,
    "topic": "Sistemi Operativi II",
    "question": "Supponiamo vogliate visualizzare l'albero delle directory con radice nella vostra home. In particolare volete visualizzare solo le directory e non i file in esse contenuti. Quali tra i seguenti comandi e' il piu' appropriato?",
    "options": [
      "tree -d ~",
      "tree -d -L 3 /home/myhomedir",
      "tree -a ~",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Il comando `tree` viene utilizzato per visualizzare graficamente la struttura di directory e file.\n\n- **Perché l'opzione A è corretta:** L'opzione `-d` dice a `tree` di elencare *solo le directory* (omettendo i file). Il carattere `~` rappresenta la home directory dell'utente corrente. Quindi `tree -d ~` risponde perfettamente alla richiesta.\n- **Perché le altre opzioni sono errate:** L'opzione B (`tree -d -L 3 /home/myhomedir`) limita la visualizzazione a 3 livelli di profondità (opzione `-L 3`), il che non era richiesto e potrebbe escludere directory annidate più a fondo. Inoltre, usa un percorso specifico hardcoded anziché la variabile generica `~`. L'opzione C (`tree -a ~`) include file nascosti (opzione `-a`) e mostra tutti i file, non solo le directory."
  },
  {
    "id": 120,
    "topic": "Sistemi Operativi II",
    "question": "Quanti file system principali ha linux?",
    "options": [
      "dipende dal numero di filesystem montati al boot",
      "1",
      "dipende dal numero di dischi installati",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "L'architettura dei sistemi operativi Unix e Linux prevede che esista un unico grande albero logico dei file.\n\n- **Perché l'opzione B è corretta:** Linux possiede un unico filesystem principale (la directory radice `/`). Qualsiasi altro filesystem (su dischi diversi, partizioni o risorse di rete) viene montato all'interno di questo unico albero in un punto di mount (mount point). Pertanto, la vista logica per l'utente e per i processi è un unico filesystem (1).\n- **Perché le altre opzioni sono errate:** Le opzioni A e C sono errate perché confondono la struttura fisica (partizioni, dischi) o il numero di filesystem montati fisicamente con la struttura logica del sistema operativo, che è sempre unificata sotto un'unica radice."
  },
  {
    "id": 121,
    "topic": "Gestione dei Processi",
    "question": "Si assuma  di avere due shell aperte, etichettate come \"shell_1\" e \"shell_2\", e si consideri la seguente sequenza di comandi (\"shell_i\":cmd indica che cmd e' eseguitto nella  shell i, i=1,2). Quale e' il loro effetto?\n\n```bash\nshell_1: xterm\nshell_2: ps -C xterm\n#restituisce xtermPID\nshell_2: kill -s SIGSTOP xtermPID\n```",
    "options": [
      "Il processo xterm viene terminato con segnale SIGSTOP",
      "Il processo xterm viene mandato  in esecuzione in background",
      "Il processo xterm viene messo in stato stopped (T)",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "In Linux, i segnali sono notifiche asincrone inviate ai processi. Il segnale `SIGSTOP` costringe il sistema operativo a sospendere immediatamente l'esecuzione del processo target, mettendolo in uno stato di stop.\n\n- **Perché l'opzione C è corretta:** Il comando `kill -s SIGSTOP` invia il segnale di stop. Il processo destinatario (`xterm`) interrompe la sua esecuzione e passa allo stato Stopped (indicato con la lettera 'T' nell'output del comando `ps`). La sua finestra sul display si bloccherà e non risponderà più agli input fino alla ricezione di un segnale `SIGCONT`.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché `SIGSTOP` non termina il processo (per quello si usa `SIGTERM` o `SIGKILL`). L'opzione B è errata perché mettere un processo in background (con `&` o `bg`) lo mantiene in esecuzione (stato Running), mentre `SIGSTOP` lo sospende completamente."
  },
  {
    "id": 122,
    "topic": "Programmazione Concorrente",
    "question": "Quale e' la differenza tra thread posix e processo linux?",
    "options": [
      "Thread concorrenti condividono codice, segmento dati e file; i processi concorrenti pure",
      "Thread concorrenti condividono lo stack; i processi concorrenti anche",
      "Thread concorrenti condividono codice, segmento dati e file; i processi concorrenti no",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "I thread (detti anche processi leggeri o LWP in Linux) condividono la maggior parte delle risorse del processo che li ha creati.\n\n- **Perché l'opzione C è corretta:** I thread concorrenti che appartengono allo stesso processo condividono lo spazio d'indirizzamento (incluso il codice eseguibile e il segmento dati/heap) e la tabella dei file descriptor aperti. Al contrario, i processi concorrenti (creati ad esempio con `fork`) possiedono spazi d'indirizzamento separati e indipendenti e tabelle di descrittori separate, anche se inizialmente duplicate.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché i processi concorrenti *non* condividono di default il segmento dati modificabile. L'opzione B è errata perché ciascun thread ha il proprio stack privato per gestire le chiamate a funzione locali; non condividono lo stack."
  },
  {
    "id": 123,
    "topic": "Gestione dei Processi",
    "question": "Per mostrare il pid dei job in esecuzione in background quali di questi comandi e' corretto?",
    "options": [
      "jobs -p",
      "ps -p -u",
      "jobs",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "La shell bash gestisce i processi avviati interattivamente tramite il meccanismo dei \"jobs\".\n\n- **Perché l'opzione A è corretta:** Il comando `jobs` elenca i job attivi nella shell corrente. L'opzione `-p` modifica l'output per mostrare esclusivamente i PID (Process ID) dei processi leader di ciascun job in background.\n- **Perché le altre opzioni sono errate:** L'opzione B (`ps -p -u`) ha una sintassi errata e non serve specificamente a elencare i job della shell corrente con i relativi PID. L'opzione C (`jobs` senza opzioni) mostra lo stato del job (es. Running, Stopped) e la riga di comando associata, ma non mostra direttamente i PID."
  },
  {
    "id": 124,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Si consideri la seguente funzione f. Cosa produce come risultato quando eseguita?\n\n```c\nchar *f(char *a, const char *b, size_t n) {\n        size_t l = strlen(a);\n        size_t i;\n             for (i = 0 ; i < n && b[i] != '\\0' ; i++)\n                     a[l + i] = b[i];\n      a[l + i] = '\\0';\nreturn a;\n}\n```",
    "options": [
      "Copia al piu' n caratteri della stringa b in a e restituisce a",
      "Copia esattamente n caratteri della stringa b nella stringa a e restituisce a",
      "Concatena i primi n caratteri della stringa b alla stringa  a  e restituisce a",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Analizzando il codice della funzione `f`:\n```c\nsize_t l = strlen(a);\nfor (i = 0 ; i < n && b[i] != '\\0' ; i++)\n    a[l + i] = b[i];\na[l + i] = '\\0';\n```\nLa variabile `l` memorizza la lunghezza iniziale della stringa `a`. Il ciclo `for` copia i caratteri di `b` a partire dalla posizione `l` di `a` (quindi subito dopo la fine della stringa originaria `a`), fermandosi dopo `n` caratteri o quando incontra il terminatore `\\0` in `b`. Infine, viene aggiunto correttamente il terminatore nullo `\\0`.\n\n- **Perché l'opzione C è corretta:** Questa è esattamente la definizione di concatenazione: accodare i caratteri di `b` a quelli esistenti in `a`. Poiché il ciclo si ferma dopo al più `n` iterazioni, vengono concatenati al massimo i primi `n` caratteri della stringa `b`.\n- **Perché le altre opzioni sono errate:** Le opzioni A e B parlano di 'copia' della stringa `b` in `a`. La copia sovrascriverebbe i caratteri esistenti di `a` a partire dall'indice 0, mentre questo codice scrive a partire dall'indice `l` (concatenazione)."
  },
  {
    "id": 125,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Si consideri il seguente ciclo for. Cosa produrebbe come risultato, se eseguito?\n\n```c\nint scoreCount, a;\nfor(scoreCount=0; scanf(\"%d\",&a)==1; scoreCount++);\n```",
    "options": [
      "Legge una sola volta da stdin e poi termina",
      "Legge da stdin senza mai terminare",
      "Legge ripetutamente numeri interi da stdin",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "La funzione `scanf(\"%d\", &a)` tenta di leggere un intero dallo standard input e memorizzarlo in `a`.\nEssa restituisce il numero di elementi convertiti con successo (in questo caso `1` se legge un intero, `0` se l'input non è numerico, o la costante `EOF` (-1) in caso di fine del file o errore di lettura).\n\n- **Perché l'opzione C è corretta:** Il ciclo `for` continua finché la condizione `scanf(...) == 1` è vera. Finché l'utente fornisce numeri interi validi, il ciclo continua a leggerli uno alla volta, incrementando `scoreCount`. Il ciclo termina solo quando viene inserito un input non numerico o si raggiunge la fine dell'input (EOF).\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché il ciclo non legge una sola volta, ma continua finché la conversione ha successo. L'opzione B è errata perché il ciclo ha una condizione di terminazione ben definita (scanf != 1), quindi termina non appena l'input non è un intero."
  },
  {
    "id": 126,
    "topic": "System Call e File",
    "question": "Cosa  stampa su stdout la seguente chiamata a printf?\n\n```c\nprintf(\"aaaaa\\nbbbbb\\f\\rccccc\\r\\fddddd\\reeeee\\r\\n\");\n```",
    "options": [
      "aaaaa bbbbb ccccc eeeee",
      "aaaaa bbbbb ccccc ddddd",
      "aaaaa bbbbb ccccc ddddd eeeee",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Per comprendere l'output di questa chiamata a `printf`, dobbiamo analizzare l'effetto dei caratteri di escape di controllo:\n- `\\n` (newline): manda a capo la riga.\n- `\\r` (carriage return): riporta il cursore all'inizio della riga corrente, permettendo la sovrascrittura del testo già stampato.\n- `\\f` (form feed): sui terminali moderni si comporta come una andata a capo mantenendo la posizione orizzontale del cursore, o semplicemente va a capo.\n\nEsecuzione passo-passo:\n1. Stampa `aaaaa` e va a capo (`\\n`).\n2. Stampa `bbbbb`.\n3. `\\f` sposta il cursore alla riga successiva (sotto la 'b' finale). `\\r` sposta il cursore all'inizio di questa nuova riga.\n4. Stampa `ccccc`.\n5. `\\r` sposta il cursore all'inizio della riga dove c'è `ccccc`.\n6. `\\f` va alla riga successiva. Stampa `ddddd`.\n7. `\\r` sposta il cursore all'inizio della riga contenente `ddddd`.\n8. Stampa `eeeee` che sovrascrive interamente `ddddd` (poiché hanno la stessa lunghezza di 5 caratteri).\n9. Va a capo (`\\r\\n`).\nQuindi, sul terminale vedremo stampate le righe contenenti: `aaaaa`, `bbbbb`, `ccccc` e infine `eeeee` (che ha sovrascritto `ddddd`).\n\n- **Perché l'opzione A è corretta:** Visualizza le stringhe `aaaaa bbbbb ccccc eeeee` sulle rispettive righe.\n- **Perché le altre opzioni sono errate:** Le altre opzioni non tengono conto del fatto che `eeeee` sovrascrive completamente `ddddd` a causa del ritorno carrello `\\r` posizionato prima di `eeeee`."
  },
  {
    "id": 127,
    "topic": "Gestione della Memoria Dinamica",
    "question": "Si consideri il seguente frammento di codice. Per de-allocare tutta la memoria allocata, quale delle seguenti opzioni e' coretta?\n\n```c\nchar **mptr, **mptr1, *ptr1;\nint i;\nmptr = calloc(10,sizeof(char *));\nmptr1 = mptr;\nfor(i=0;i<10;i++){\n   mptr[i]=(char *)malloc(10);\n}\n```",
    "options": [
      "for(i=0;i<10;i++) free(mptr1[i]);",
      "for(i=0;i<10;i++)  free(mptr1[i]); free(mptr1);",
      "free(mptr1);",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il codice alloca dinamicamente un array di 10 puntatori a `char` (`mptr`), e per ciascuno di essi alloca un blocco di 10 byte.\nPer liberare tutta la memoria senza lasciare leak:\n1. Bisogna prima scorrere l'array e liberare ciascuno dei 10 blocchi puntati da `mptr[i]` (o dal suo equivalente `mptr1[i]`).\n2. Successivamente, si deve liberare l'array di puntatori stesso (`mptr` o `mptr1`).\n\n- **Perché l'opzione B è corretta:** Il ciclo `for` dealloca ogni singolo blocco di caratteri (`free(mptr1[i])`), e al termine il comando `free(mptr1)` dealloca l'array di puntatori. Questo pulisce perfettamente tutta la memoria allocata sullo heap.\n- **Perché le altre opzioni sono errate:** L'opzione A libera i singoli elementi ma lascia allocato l'array di puntatori (`mptr1`), causando un leak di `10 * sizeof(char*)` byte. L'opzione C libera solo l'array di puntatori senza liberare i 10 blocchi allocati al suo interno. Poiché i puntatori a tali blocchi vengono persi, si genera un leak di 100 byte e i blocchi non potranno più essere deallocati."
  },
  {
    "id": 128,
    "topic": "Gestione della Memoria Dinamica",
    "question": "Si consideri il seguente frammento di codice. Quale delle seguenti strategie di de-allocazione crea un memory leakage?\n\n```c\nchar **mptr, *ptr1;\nint i;\nmptr = calloc(10,sizeof(char *));\nfor(i=0;i<10;i++){\n   mptr[i]=(char *)malloc(10);\n}\n```",
    "options": [
      "free(mptr);",
      "for(i=0;i<10;i++) free(mptr[i]);",
      "entrambe, ovvero sia (a) che (b)",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Un memory leak si verifica quando la memoria allocata dinamicamente non viene liberata e i relativi puntatori vengono persi, rendendo impossibile la deallocazione futura.\n\n- **Perché l'opzione C è corretta:** Entrambe le strategie (a) e (b) sono scorrette e creano memory leakage:\n  - La strategia (a) (`free(mptr);`) dealloca solo l'array di puntatori primario. I 10 blocchi di memoria da 10 byte ciascuno precedentemente allocati rimangono nello heap, e non vi è più alcun puntatore che consenta di accedervi per liberarli.\n  - La strategia (b) (il ciclo `for` che fa `free(mptr[i])`) libera i singoli blocchi, ma si dimentica di liberare l'array di puntatori `mptr` stesso, che rimane allocato nello heap.\nDi conseguenza, entrambe le opzioni singolarmente causano leak, rendendo corretta l'opzione C ('entrambe, ovvero sia (a) che (b)')."
  },
  {
    "id": 129,
    "topic": "Preprocessore e compilazione",
    "question": "Si consideri un file contenente un programma in linguaggio C. Si assuma che e' stata inserita la direttiva #include \"stdio.h\" . Perche' la compilazione potrebbe generare errori?",
    "options": [
      "Perche' cerca il file \"stdio.h\" nella directory corrente",
      "La compilazione non genera errori a meno che il file non esista nel filesystem",
      "Perche' il file stdio.h potrebbe non esistere",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "In C, la direttiva `#include` accetta due sintassi:\n1. `#include <file.h>`: indica al preprocessore di cercare il file nei percorsi di sistema predefiniti (es. `/usr/include`).\n2. `#include \"file.h\"`: indica di cercare il file prima nella directory corrente (dove si trova il file sorgente) e, solo in caso di insuccesso, nei percorsi di sistema standard.\n\n- **Perché l'opzione A è corretta:** L'uso delle virgolette impone al compilatore di cercare prima nella directory corrente. Se in tale directory esiste un file personalizzato chiamato `stdio.h` (scritto dall'utente o da terzi), il preprocessore includerà quest'ultimo anziché quello standard di libreria. Ciò potrebbe ridefinire prototipi o macro fondamentali, causando errori di compilazione nel codice che si aspetta la libreria standard.\n- **Perché le altre opzioni sono errate:** L'opzione B è errata perché la compilazione fallisce se il file incluso non rispetta le definizioni necessarie, anche se esiste. L'opzione C è errata perché il file standard di libreria `stdio.h` esiste sempre nell'ambiente di sviluppo standard."
  },
  {
    "id": 130,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Quale e' il modo corretto per controllare che due stringhe str1 e str2 sono uguali?",
    "options": [
      "if strcmp(s1,s2)==0 {printf(\"stringhe uguali\")}",
      "if (s1==s2) {printf(\"stringhe uguali\")}",
      "if strcmp(s1,s2) {printf(\"stringhe uguali\")}",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "In linguaggio C, le stringhe sono array di caratteri e non possono essere confrontate direttamente con gli operatori di confronto standard.\n\n- **Perché l'opzione A è corretta:** La funzione `strcmp(s1, s2)` della libreria `<string.h>` confronta due stringhe carattere per carattere. Restituisce `0` se le due stringhe sono identiche, un valore negativo se `s1` è lessicograficamente minore di `s2`, e un valore positivo altrimenti. Quindi la condizione `strcmp(s1, s2) == 0` è il modo corretto per testare l'uguaglianza.\n- **Perché le altre opzioni sono errate:** L'opzione B (`s1 == s2`) confronta i valori dei puntatori (le zone di memoria in cui risiedono le stringhe) e non il contenuto delle stringhe stesse; sarà vera solo se i due puntatori puntano esattamente allo stesso indirizzo. L'opzione C (`if strcmp(s1,s2)`) è errata perché se le stringhe sono uguali, `strcmp` restituisce `0`, che in C è interpretato come valore booleano FALSO; quindi il blocco non verrebbe eseguito."
  },
  {
    "id": 131,
    "topic": "System Call e File",
    "question": "Si consideri il seguente frammento di codice. Assumendo che myfile.txt non esiste, quale delle seguenti affermazioni e' vera?\n\n```c\nFILE * pFile;\npFile = open(\"myfile.txt\",\"rw+\");\nfprintf(pFile, \"%f %s\", 3.1416, \"PI\");\n```",
    "options": [
      "Il programma genera un errore in fase di esecuzione",
      "Il programma genera errore in fase di compilazione",
      "Il programma scrive sul file myfile.txt la stringa 3.1416 PI",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Analizzando il codice:\n```c\nFILE * pFile;\npFile = open(\"myfile.txt\",\"rw+\");\nfprintf(pFile, \"%f %s\", 3.1416, \"PI\");\n```\nCi sono diversi errori macroscopici in questo frammento:\n1. La funzione chiamata è `open`, che è una system call di basso livello che restituisce un descrittore di tipo `int`, ma il codice assegna il risultato a `pFile` che è di tipo `FILE *` (puntatore a struttura gestita da `stdio.h`).\n2. La system call `open` non accetta una stringa come secondo parametro (come `\"rw+\"`), ma richiede costanti intere (es. `O_RDWR`, `O_CREAT`).\n3. La funzione `fprintf` richiede come primo argomento un puntatore di tipo `FILE *`, ma riceve un intero convertito a puntatore (o causa disallineamenti di tipo).\nIl compilatore C rileva questi disallineamenti di tipo critici (o l'assenza di prototipi compatibili) e solleva un errore di compilazione.\n\n- **Perché l'opzione B è corretta:** Il codice genera un errore in fase di compilazione a causa dell'incompatibilità dei tipi.\n- **Perché le altre opzioni sono errate:** L'opzione A e C assumono che il codice possa essere compilato ed eseguito, il che è falso."
  },
  {
    "id": 132,
    "topic": "System Call e File",
    "question": "Supponiamo di eseguire  separatamente i seguenti frammenti di codice. Quale delle seguenti affermazioni e' falsa?\n\n```c\nFrammento_1\nclose(2);\nif (fopen(\".\",\"r\")) {\n    perror(\"main\");\n}\n\nFrammento_2\nclose(2);\nif (fopen(\".\",\"r\")) {\n    printf(\"main:%s\\n\", strerror(errno));\n}\n```",
    "options": [
      "Il frammento_1 non produce alcun output sul terminale",
      "La loro esecuzione produce sul terminale due stringhe identiche",
      "Il frammento_2 produce un output sullo stdout",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il descrittore di file `2` rappresenta lo Standard Error (`stderr`).\nNel `Frammento_1`, viene chiamato `close(2);` che chiude lo standard error. Successivamente, `fopen(\".\", \"r\")` fallisce (perché su Linux non si può aprire una directory in modalità di sola lettura standard con fopen o fallisce per altri motivi legati a permessi/flussi). Quando fallisce, viene chiamato `perror(\"main\");`. La funzione `perror` scrive il messaggio di errore specificamente sul descrittore `2` (stderr). Poiché `2` è stato chiuso, `perror` non produrrà alcun output visibile sul terminale.\nNel `Frammento_2`, dopo aver chiuso `2`, in caso di errore viene chiamato `printf(\"main:%s\\n\", strerror(errno));`. La funzione `printf` scrive sullo standard output (`stdout`, descrittore `1`), che è ancora regolarmente aperto. Quindi il messaggio di errore verrà visualizzato su stdout.\n\n- **Perché l'opzione B è corretta (ovvero è l'affermazione FALSA):** L'opzione B sostiene che l'esecuzione dei due frammenti produca sul terminale due stringhe identiche. Questo è falso perché il Frammento 1 non produce alcun output (poiché scrive su stderr che è chiuso), mentre il Frammento 2 stampa il messaggio su stdout.\n- **Perché le altre opzioni non sono selezionabili (sono affermazioni vere):** L'opzione A è vera (Frammento 1 non produce output). L'opzione C è vera (Frammento 2 produce output su stdout)."
  },
  {
    "id": 133,
    "topic": "Sistemi Operativi II",
    "question": "Quale e' la differenza  tra  la system call _exit(2)  e la funzione di libreria exit(3)?",
    "options": [
      "_exit(2) chiude tutti i file descriptor mentre exit(3) no",
      "_exit(2) non invoca gli handler registrati con  atexit e on_exit mentre exit(3) li invoca",
      "_exit(2) invoca gli handler registrati con  atexit e on_exit mentre exit(3) non li invoca",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "La funzione `exit(3)` è una funzione di libreria C ad alto livello, mentre `_exit(2)` è una chiamata di sistema a basso livello.\n\n- **Perché l'opzione B è corretta:** `exit(3)` esegue diverse operazioni di pulizia prima di terminare il processo: invoca le funzioni registrate con `atexit(3)` e `on_exit(3)`, svuota (flush) tutti i buffer dei flussi di I/O aperti (es. `stdout`, `stderr`), e chiude i flussi. Invece, la system call `_exit(2)` termina immediatamente il processo nel kernel, senza invocare alcun handler e senza effettuare il flush dei buffer dello spazio utente.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché entrambe le chiamate chiudono tutti i file descriptor aperti del processo (operazione svolta dal kernel durante la terminazione). L'opzione C inverte la realtà, affermando erroneamente che `_exit` esegua gli handler e `exit` no."
  },
  {
    "id": 134,
    "topic": "Gestione dei Processi",
    "question": "Supponiamo che la seguente system call sia invocata con valore di pid uguale a 0. Quale e' il suo comportamento?\n\n```c\npid_t waitpid(pid_t pid, int *status, int options);\n```",
    "options": [
      "attende la terminazione di qualunque processo figlio il cui gruppo ID del processo sia diverso da quello del processo chiamante",
      "attende la terminazione di qualunque processo figlio il cui gruppo ID  sia uguale a quello del processo chiamante (ovvero il processo padre)",
      "attende la terminazione di qualunque processo figlio",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "La chiamata di sistema `waitpid(pid_t pid, int *status, int options)` serve a sospendere il processo chiamante in attesa di modifiche dello stato dei suoi figli.\n\n- **Perché l'opzione B è corretta:** Come specificato nella pagina man di `waitpid(2)`, quando il parametro `pid` è uguale a `0`, la chiamata attende la terminazione di un qualsiasi processo figlio il cui Group ID (PGID) sia uguale a quello del processo chiamante al momento dell'invocazione della waitpid.\n- **Perché le altre opzioni sono errate:** L'opzione A descrive il comportamento per `pid < -1` (attesa di un figlio con PGID pari al valore assoluto di `pid`). L'opzione C descrive il comportamento quando `pid == -1`, che equivale a una chiamata a `wait(2)` (attesa di un figlio qualunque, indipendentemente dal gruppo)."
  },
  {
    "id": 135,
    "topic": "System Call e File",
    "question": "Si consideri il seguente frammento di codice. Quale e' il suo comportamento?\n\n```c\nchar* file = argv[1];\nint fd;\nstruct flock lock;\nfd = open (file, O_WRONLY);\nmemset (&lock, 0, sizeof(lock));\nlock.l_type = F_WRLCK;\nfcntl (fd, F_SETLKW, &lock);\n....\n```",
    "options": [
      "mette un lock mandatory in scrittura sul file file",
      "mette un lock advisory in scrittura sul file file",
      "mette un lock bloccante in scrittura sul file file",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Il codice configura una struttura `struct flock` per inserire un lock in scrittura:\n```c\nlock.l_type = F_WRLCK;\nfcntl (fd, F_SETLKW, &lock);\n```\nL'argomento `F_SETLKW` indica che l'operazione deve impostare il lock e che, nel caso in cui un altro processo detenga già un lock incompatibile sullo stesso file, il processo chiamante deve *bloccarsi* (la 'W' in `F_SETLKW` sta per 'Wait') fino a quando il lock non si rende disponibile.\n\n- **Perché l'opzione C è corretta:** L'uso di `F_SETLKW` crea specificamente un lock bloccante (se fosse stato usato `F_SETLK` senza W, la chiamata sarebbe fallita immediatamente con l'errore `EACCES` o `EAGAIN` in caso di conflitto, rendendolo non-bloccante).\n- **Perché le altre opzioni sono errate:** L'opzione A parla di lock 'mandatory' (obbligatorio). Per impostazione predefinita, su Linux i lock impostati con `fcntl` sono 'advisory' (consigliati/cooperativi), a meno che il filesystem e i permessi del file non siano configurati appositamente per abilitare il meccanismo mandatory. L'opzione B parla genericamente di lock advisory, ma non specifica la caratteristica cruciale del comportamento bloccante indotta da `F_SETLKW`."
  },
  {
    "id": 136,
    "topic": "System Call e File",
    "question": "Quale e'  la  differenza tra i seguenti frammenti di codice?\n\n```c\nC1:\nint fd, fd1;\nfd = open(\"filename\", O_RDWR);\nfd1 = fd;\n\nC2:\nint fd, fd1;\nfd = open(\"filename\", O_RDWR);\nfd1 = dup(fd);\n```",
    "options": [
      "Dopo l'esecuzione di C1 e C2  fd1  contiene lo stesso valore",
      "Dopo  l'esecuzione di C1  i due  file descriptor puntano allo stesso file, mentre dopo l'esecuzione di  C2 il file filename viene duplicato",
      "Dopo l'esecuzione di C1 fd1 contiene lo stesso valore di  fd; mentre  dopo l'esecuzione di  C2  fd1 contiene il valore del piu' piccolo file descriptor disponibile",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Questo quesito confronta due modalità per copiare un file descriptor:\n- In `C1`, l'istruzione `fd1 = fd;` copia semplicemente il valore intero del descrittore. Entrambe le variabili contengono lo stesso intero (es. `3`), riferito allo stesso elemento nella tabella dei file descriptor del processo.\n- In `C2`, la chiamata `fd1 = dup(fd);` è una system call che alloca un *nuovo* slot libero nella tabella dei file descriptor del processo (il numero intero più piccolo disponibile, ad esempio `4`), e lo fa puntare alla stessa descrizione del file aperto (open file description) nel kernel.\n\n- **Perché l'opzione C è corretta:** In `C1`, `fd1` assume lo stesso valore numerico di `fd`. In `C2`, `fd1` assume il valore numerico del più piccolo descrittore disponibile, che sarà diverso da `fd` (sebbene entrambi puntino alla stessa risorsa sottostante).\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché in C2 `fd1` conterrà un intero diverso da `fd`. L'opzione B è errata perché `dup` non duplica fisicamente il file sul disco, duplica solo il riferimento interno (descrittore) nello spazio del kernel."
  },
  {
    "id": 137,
    "topic": "Gestione dei Processi",
    "question": "Si consideri la system call execve(2). Quale delle seguenti affermazioni e' corretta?",
    "options": [
      "la execve(2) permette di generare un proccesso figlio del processo chiamante senza utilizzare una fork ma semplicemente eseguendo un immagine contenuta in un file (execve esegue implicitamente la fork)",
      "la execve(2) permette di sostituire l'immagine di un processo con quella di un file eseguibile o di uno script di shell eseguibile",
      "la execve(2) e' una estensione della funzione system(3). Infatti, execve(2) puo' eseguire un qualsiasi programma, incluso uno script di shell",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "La chiamata di sistema `execve(2)` carica ed esegue un nuovo programma all'interno del processo corrente.\n\n- **Perché l'opzione B è corretta:** Quando un processo invoca con successo `execve`, l'intero spazio di indirizzamento del processo chiamante (codice, dati, heap, stack) viene sovrascritto e sostituito con quello del nuovo programma specificato. Il processo mantiene lo stesso PID, i descrittori di file aperti (salvo quelli con il flag close-on-exec impostato), i permessi utente e l'appartenenza ai gruppi, ma esegue un codice completamente diverso.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché `execve` *non* esegue implicitamente una `fork`; non crea un nuovo processo figlio, ma trasforma il processo corrente. L'opzione C è errata perché `execve` non è un'estensione di `system(3)`; semmai è il contrario (la funzione `system` viene implementata internamente effettuando una `fork` e richiamando `exec` per avviare `/bin/sh`)."
  },
  {
    "id": 138,
    "topic": "System Call e File",
    "question": "Si consideri il seguente frammento di codice. Cosa produce come  risultato una volta eseguito?\n\n```c\nsigset_t set, oset, pset;\n...\nsigemptyset( &set ); \nsigaddset( &set, SIGINT ); \nsigaddset( &set, SIGUSR1 );\nsigprocmask( SIG_BLOCK, &set, &oset );\n…\n```",
    "options": [
      "Prepara una sezione critica (ovvero dopo la sigprocmask puo' inizare la sezione critica)",
      "Termina una sezione critica precedentemente iniziata",
      "Disabilita tutti i segnali tranne SIGINT e SIGUSR1",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "La chiamata `sigprocmask` viene utilizzata per esaminare e modificare la maschera dei segnali bloccati del processo chiamante.\nNel codice:\n```c\nsigemptyset(&set);\nsigaddset(&set, SIGINT);\nsigaddset(&set, SIGUSR1);\nsigprocmask(SIG_BLOCK, &set, &oset);\n```\nViene creato un set contenente i segnali `SIGINT` e `SIGUSR1`. La chiamata a `sigprocmask` con il parametro `SIG_BLOCK` aggiunge questi segnali alla maschera corrente dei segnali bloccati del processo. Questo significa che se arrivano `SIGINT` o `SIGUSR1`, essi verranno messi in attesa (pending) dal kernel e non saranno consegnati al processo finché non verranno sbloccati.\n\n- **Perché l'opzione A è corretta:** Bloccare i segnali asincroni sensibili permette di iniziare una \"sezione critica\" di codice, ovvero una porzione di programma che deve essere eseguita senza interruzioni asincrone che potrebbero lasciare le strutture dati in uno stato incoerente.\n- **Perché le altre opzioni sono errate:** La maschera non impedisce l'arrivo dei segnali nel sistema, semplicemente ne sospende la consegna al processo, quindi non si tratta di 'ignorarli' permanentemente (cosa che si fa con `SIG_IGN` in `sigaction`)."
  },
  {
    "id": 139,
    "topic": "Sistemi Operativi II",
    "question": "Si consideri il seguente frammento di codice; quando termina il ciclo for?\n\n```bash\nfor (i=0;((i<n1)&&(i<n2));i++)\n       m2[i]=m1[i];\n```",
    "options": [
      "Termina solo se n1 è uguale a n2",
      "Quando i raggiunge il più grande tra n1 e n2",
      "Quando i raggiunge il più piccolo tra n1 e n2",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Analizzando la condizione di permanenza nel ciclo `for`:\n`((i < n1) && (i < n2))`\nL'operatore logico utilizzato è `&&` (AND logico). Ciò significa che per continuare ad eseguire il ciclo, la variabile di controllo `i` deve essere contemporaneamente minore sia di `n1` che di `n2`.\n\n- **Perché l'opzione C è corretta:** Il ciclo si interrompe non appena *una sola* delle due sotto-condizioni diventa falsa. Questo avviene quando `i` raggiunge il valore del più piccolo tra `n1` e `n2`. A quel punto, l'AND logico fallisce e il ciclo termina.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché il ciclo funziona correttamente e termina anche se `n1` e `n2` sono diversi. L'opzione B è errata perché se il ciclo continuasse fino al più grande dei due limiti, andrebbe a violare la condizione di essere minore del più piccolo, causando accessi fuori dai limiti dell'array minore."
  },
  {
    "id": 140,
    "topic": "Gestione dei Processi",
    "question": "A seguito di una chiamata a fork(2), quale dei seguenti attributi del processo padre non è ereditato dal processo figlio?",
    "options": [
      "groups id",
      "coda dei segnali",
      "descrittori dei file",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Quando viene eseguita una `fork(2)`, il processo figlio riceve una copia quasi identica del contesto del padre.\n\n- **Perché l'opzione B è corretta:** La coda dei segnali pendenti (segnali inviati al padre ma non ancora consegnati) *non* viene ereditata dal figlio. Il processo figlio nasce con una coda dei segnali pendenti completamente vuota.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché l'appartenenza ai gruppi (Groups ID secondari) viene ereditata fedelmente dal processo figlio. L'opzione C è errata perché tutti i descrittori di file aperti dal padre vengono duplicati nel figlio, ed entrambi i processi condivideranno gli stessi puntatori ai file aperti (offset compresi)."
  },
  {
    "id": 141,
    "topic": "Sistemi Operativi II",
    "question": "Per visualizzare l'atime di un file, quale dei seguenti comandi è corretto?",
    "options": [
      "ls -lc nomefile",
      "ls -lu nomefile",
      "ls -la nomefile",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "In Unix/Linux, i file hanno tre timestamp principali:\n- `mtime` (modification time): tempo dell'ultima modifica al contenuto del file.\n- `ctime` (change time): tempo dell'ultimo cambio dei metadati (permessi, proprietario) o del contenuto.\n- `atime` (access time): tempo dell'ultimo accesso (lettura) al file.\n\n- **Perché l'opzione B è corretta:** Il comando `ls -l` di default mostra il tempo di modifica (`mtime`). L'opzione `-u` indica a `ls` di utilizzare il tempo di accesso (`atime`) per l'ordinamento e la visualizzazione logica. Quindi `ls -lu` mostra l'atime del file.\n- **Perché le altre opzioni sono errate:** L'opzione A (`ls -lc`) mostra il tempo di modifica dello stato/metadati (`ctime`). L'opzione C (`ls -la`) mostra tutti i file (inclusi quelli nascosti che iniziano con `.`), ma mostra comunque il tempo `mtime` standard."
  },
  {
    "id": 142,
    "topic": "System Call e File",
    "question": "Sia mylink un soft link al file myfile (ln -s myfile mylink). Quale di queste affermazioni è vera?",
    "options": [
      "myfile e mylink hanno un diverso numero di inode",
      "myfile e mylink hanno lo stesso numero inode",
      "myfile e mylink hanno la stessa dimensione",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Un soft link (o collegamento simbolico) è un tipo speciale di file che contiene semplicemente una stringa di testo corrispondente al percorso del file reale (il target).\n\n- **Perché l'opzione A è corretta:** Poiché il soft link è a tutti gli effetti un file distinto creato nel filesystem, esso possiede un proprio numero di inode separato e differente rispetto al file originale (`myfile`).\n- **Perché le altre opzioni sono errate:** L'opzione B ('stesso numero inode') descrive il comportamento degli *hard link*, non dei soft link. L'opzione C è errata perché la dimensione del soft link è pari alla lunghezza in caratteri del nome del file a cui punta (es. 'myfile' ha dimensione 6 byte), mentre il file originale ha una sua dimensione indipendente che può essere arbitrariamente grande."
  },
  {
    "id": 143,
    "topic": "Gestione Utenti",
    "question": "Quale tra i seguenti comandi è il modo più corretto di verificare a quali gruppi appartiene un utente?\n\n```bash\nC1) groups nomeutente\nC2) cat /etc/groups | grep nomeutente\n```",
    "options": [
      "nessuno dei due",
      "C2",
      "C1",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Confrontiamo i due comandi proposti:\n- `C1) groups nomeutente` interroga direttamente le chiamate di sistema e i database degli utenti attivi nel sistema (attraverso il Name Service Switch), garantendo di restituire l'elenco esatto e aggiornato di tutti i gruppi (primari e secondari) a cui l'utente appartiene.\n- `C2) cat /etc/groups | grep nomeutente` (a parte il fatto che il file corretto è `/etc/group` senza la 's' finale) effettua una semplice ricerca testuale nel file locale dei gruppi. Questo metodo ha due grossi limiti: non elenca il gruppo primario se questo è configurato solo in `/etc/passwd`, ed effettua un matching testuale grezzo che potrebbe intercettare sottostringhe errate (es. se cerchiamo 'user' troverà anche righe contenenti 'user1', 'superuser', ecc.).\n\n- **Perché l'opzione C è corretta:** `C1` (`groups nomeutente`) è il modo corretto e sicuro fornito dal sistema operativo.\n- **Perché le altre opzioni sono errate:** `C2` è un metodo grossolano, soggetto a falsi positivi e incompleto (manca del gruppo primario)."
  },
  {
    "id": 144,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Si consideri la seguente funzione f. Cosa produce come risultato quando eseguita?\n\n```c\nchar *f(char* dest, const char* src, size_t n) {\n    size_t i; size_t dest_len = strlen(dest);\n    for (i = 0; i < n && src[i] != '\\0'; i++) dest[dest_len + i] = src[i];\n    for (; i < n; i++) dest[dest_len + i] = '\\0';\n    return dest;\n}\n```",
    "options": [
      "Genera sempre errore in fase di esecuzione perché non c'è alcun controllo sulla dimensione delle stringhe",
      "Concatena la stringa src a dest e restituisce dest",
      "Copia la stringa src in dest e restituisce dest",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Analizzando il codice della funzione `f`:\n```c\nsize_t dest_len = strlen(dest);\nfor (i = 0; i < n && src[i] != '\\0'; i++) dest[dest_len + i] = src[i];\nfor (; i < n; i++) dest[dest_len + i] = '\\0';\n```\nQuesta funzione si comporta in modo analogo alla funzione standard `strncat(3)`:\n1. Calcola la lunghezza corrente di `dest`.\n2. Copia i caratteri di `src` accodandoli a `dest` fino a un massimo di `n` caratteri o finché non trova il terminatore di `src`.\n3. Se la fine di `src` viene raggiunta prima di `n` caratteri, il secondo ciclo `for` riempie il rimanente spazio fino a `n` con caratteri nulli (`'\\0'`).\nIn ogni caso, l'effetto finale è l'accodamento del contenuto di `src` a `dest` (concatenazione).\n\n- **Perché l'opzione B è corretta:** La funzione effettua una concatenazione della stringa `src` a `dest`, ritornando il puntatore `dest`.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché, sebbene non ci sia un controllo esplicito sui buffer overflow, la funzione in sé non genera 'sempre' un errore (funziona regolarmente se lo spazio allocato per `dest` è sufficiente). L'opzione C parla di semplice copia (che sovrascriverebbe l'inizio di `dest`), mentre qui i caratteri vengono aggiunti a partire dall'offset `dest_len` (concatenazione)."
  },
  {
    "id": 145,
    "topic": "Gestione Utenti",
    "question": "Cosa produce il seguente comando come risultato?\n\n```bash\ncat /etc/group | grep nomeutente\n```",
    "options": [
      "Visualizza su stdout tutti i gruppi a cui appartiene l'utente \"nomeutente\", incluso il gruppo \"nomeutente\" (se esiste)",
      "Visualizza su stdout la lista dei gruppi a cui appartiene il gruppo \"nomeutente\" (se esiste)",
      "Genera un errore in quanto il file /etc/group non esiste",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Il file `/etc/group` definisce la configurazione dei gruppi presenti nel sistema, elencando per ciascun gruppo il nome del gruppo, la password, il Group ID (GID) e la lista dei membri del gruppo separati da virgole.\n\n- **Perché l'opzione A è corretta:** Eseguendo `cat /etc/group | grep nomeutente`, verranno filtrate e stampate tutte le righe del file che contengono la stringa `nomeutente`. Questo mostrerà tutti i gruppi secondari di cui l'utente fa parte (poiché il suo nome utente appare nella lista dei membri) e mostrerà anche il gruppo privato avente lo stesso nome dell'utente `nomeutente` (se esistente), poiché la riga del gruppo inizierà proprio con quel nome.\n- **Perché le altre opzioni sono errate:** L'opzione B è errata perché `/etc/group` contiene i membri appartenenti a ciascun gruppo, non l'elenco dei gruppi a cui appartiene un ipotetico 'gruppo'. L'opzione C è errata perché il file `/etc/group` (singolare) è un file di sistema fondamentale e sempre esistente in qualsiasi sistema operativo Linux."
  },
  {
    "id": 146,
    "topic": "Permessi del Filesystem",
    "question": "Se una directory ha i permessi di accesso settati come 0222, quali operazioni e' possibile fare su di essa?",
    "options": [
      "nessuna operazione",
      "operazioni di scrittura, ed è possibile visualizzarne il contenuto senza vederne gli attributi dei file",
      "operazioni di scrittura",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "In Unix/Linux, i permessi di una directory hanno un significato diverso rispetto a quelli dei file regolari:\n- `r` (read, valore 4): permette di leggere l'elenco dei nomi dei file contenuti nella directory (es. con `ls`).\n- `w` (write, valore 2): permette di modificare il contenuto della directory (creare, eliminare o rinominare file), ma solo se combinato con il permesso di esecuzione.\n- `x` (execute, valore 1): permette l'accesso alla directory (attraversamento), indispensabile per accedere agli inode dei file contenuti, leggerne i metadati o aprirli.\n\n- **Perché l'opzione A è corretta:** La directory ha permessi `0222` (ovvero solo scrittura `w` per tutti, senza lettura `r` e senza esecuzione `x`). Poiché manca il permesso di esecuzione (`x`), è impossibile accedere alla directory o a qualsiasi file in essa contenuto. Poiché manca anche il permesso di lettura (`r`), è impossibile elencarne i file. Inoltre, il permesso di scrittura `w` da solo, senza `x`, non consente alcuna modifica reale (poiché non si può attraversare la directory per modificare gli inode). Quindi non è possibile effettuare *nessuna operazione*.\n- **Perché le altre opzioni sono errate:** Le opzioni B e C ipotizzano che si possano fare operazioni di scrittura o visualizzazione. Senza il bit `x` impostato, qualsiasi tentativo di accesso alla directory restituirà un errore di 'Permission denied'."
  },
  {
    "id": 147,
    "topic": "Sistemi Operativi II",
    "question": "Quale delle seguenti dichiarazioni di variabile è non valida, generando quindi un errore di compilazione?",
    "options": [
      "int goto=1;",
      "int goTo=1;",
      "int go_to=1;",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "In C, i nomi delle variabili devono essere identificatori validi e non possono coincidere con le parole chiave riservate del linguaggio.\n\n- **Perché l'opzione A è corretta:** La parola `goto` è una parola chiave riservata del linguaggio C (utilizzata per i salti incondizionati). Di conseguenza, dichiarare una variabile con nome `goto` (`int goto = 1;`) viola la sintassi del linguaggio e genera un errore di compilazione.\n- **Perché le altre opzioni sono errate:** Le parole `goTo` (il C è case-sensitive, quindi è diversa da `goto`) e `go_to` non sono parole riservate del linguaggio, e sono quindi identificatori perfettamente validi per le variabili."
  },
  {
    "id": 148,
    "topic": "Sistemi Operativi II",
    "question": "Dopo aver eseguito il comando seguente, cosa conterrà il file \"hw\"?\n\n```bash\ncpp helloworld.c > hw\n```",
    "options": [
      "L'input per il debugger relativo al file helloworld.c",
      "Il precompilato di helloworld.c",
      "Un file identico ad helloworld.c",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il comando `cpp` corrisponde al *C Preprocessor* (il preprocessore C).\n\n- **Perché l'opzione B è corretta:** Il preprocessore C ha il compito di elaborare le direttive del preprocessore (come `#include`, `#define` o `#ifdef`) prima della compilazione effettiva. Il comando `cpp helloworld.c > hw` genera un file di testo `hw` contenente il codice sorgente \"precompilato\" (o pre-elaborato), in cui tutte le macro sono state espanse e i file di intestazione inclusi sono stati copiati integralmente nel testo.\n- **Perché le altre opzioni sono errate:** L'opzione A descrive i file di simboli per il debugger (generati con l'opzione `-g` del compilatore). L'opzione C è errata perché il file precompilato differirà moltissimo da quello originale a causa dell'inclusione di migliaia di righe di codice provenienti dagli header inclusi (es. `stdio.h`)."
  },
  {
    "id": 149,
    "topic": "Permessi del Filesystem",
    "question": "Assumiamo che quando viene creata una directory i suoi permessi di accesso sono 0644. Quale sara la umask?",
    "options": [
      "0644",
      "0022",
      "0133",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "In Unix/Linux, la creazione di una directory richiede di default i permessi massimi di lettura, scrittura ed esecuzione per tutti (`0777`), poiché il permesso `x` è indispensabile per potervi accedere. I permessi effettivi con cui una directory viene creata sul disco sono calcolati applicando una maschera di bit chiamata `umask` secondo la formula:\n`Permessi_Effettivi = Permessi_Default & ~Umask` (ovvero sottraendo i permessi specificati nella umask).\n\n- **Perché l'opzione C è corretta:** Sappiamo che:\n  - I permessi di default per le directory sono `0777` (in binario: `111 111 111`).\n  - I permessi effettivi desiderati sono `0644` (in binario: `110 100 100`).\n  - Per passare da `0777` a `0644`, dobbiamo negare i bit corrispondenti: il primo gruppo passa da `7` (rwx) a `6` (rw-), quindi dobbiamo togliere `1` (x); il secondo gruppo passa da `7` (rwx) a `4` (r--), quindi dobbiamo togliere `3` (wx); il terzo gruppo passa da `7` a `4`, quindi togliamo `3` (wx).\nLa maschera che rimuove questi bit è proprio `0133` (in ottale).\n- **Perché le altre opzioni sono errate:** L'opzione A (`0644`) applicata come umask produrrebbe permessi `0133`. L'opzione B (`0022`) è la umask standard di Linux e applicata a `0777` produce directory con permessi `0755`."
  },
  {
    "id": 150,
    "topic": "Sistemi Operativi II",
    "question": "Quando si esegue il comando ls -l viene mostrato, come prima informazione, il totale. Quale è il significato di questo campo?",
    "options": [
      "Dimensione della directory espressa in numero di blocchi su disco",
      "Dimensione della directory espressa in numero di file contenuti in essa e in tutte le sotto-directory",
      "Numero totale di sotto directory",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Quando si esegue il comando `ls -l` su una directory, la prima riga stampata è simile a `totale 44` (o `total 44`).\n\n- **Perché l'opzione A è corretta:** Questo valore rappresenta lo spazio su disco occupato cumulativamente da tutti i file contenuti nella directory corrente, espresso come numero totale di blocchi fisici di memoria di massa (generalmente blocchi da 1024 byte o da 512 byte a seconda della configurazione del filesystem).\n- **Perché le altre opzioni sono errate:** L'opzione B e C ipotizzano che il totale conti il numero di file o sotto-directory, il che è errato (il numero mostrato è una misura di occupazione fisica di memoria, non un conteggio di elementi)."
  },
  {
    "id": 151,
    "topic": "Sistemi Operativi II",
    "question": "Si consideri il seguente frammento di codice. Dopo la sua esecuzione, quale sarà il valore contenuto in num?\n\n```c\nint num = 5;\nint *numPtr;\nnumPtr = &num;\n*numPtr = 10;\n```",
    "options": [
      "5",
      "10",
      "0x123AF345 (indirizzo di memoria)",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Analizziamo l'assegnazione tramite puntatore:\n1. `int num = 5;` definisce la variabile `num` con valore `5`.\n2. `numPtr = &num;` assegna a `numPtr` l'indirizzo di memoria della variabile `num`.\n3. `*numPtr = 10;` effettua la deferenziazione del puntatore, scrivendo il valore `10` direttamente nella cella di memoria puntata da `numPtr` (che coincide con la variabile `num`).\n\n- **Perché l'opzione B è corretta:** Poiché il valore in memoria è stato modificato, stampando `num` otterremo il nuovo valore `10`.\n- **Perché le altre opzioni sono errate:** L'opzione A ignora la modifica tramite puntatore. L'opzione C confonde il valore della variabile modificata con il valore del puntatore (indirizzo di memoria)."
  },
  {
    "id": 152,
    "topic": "Sistemi Operativi II",
    "question": "Si consideri il seguente frammento di codice. Quale delle seguenti espressioni sarà vera una volta eseguito il codice?\n\n```c\nint n= 2;\nint r= 2 * (n++);\nint r1 = 2 * (++n)\n```",
    "options": [
      "r < r1",
      "r > r1",
      "r == r1",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Questo quesito valuta la differenza tra gli operatori di post-incremento (`n++`) e pre-incremento (`++n`):\n1. All'inizio `n = 2`.\n2. `int r = 2 * (n++);` usa l'operatore di post-incremento. L'espressione viene valutata usando il valore *corrente* di `n` (che è `2`), quindi `r = 2 * 2 = 4`. Subito dopo la valutazione, `n` viene incrementato e assume il valore `3`.\n3. `int r1 = 2 * (++n);` usa l'operatore di pre-incremento. La variabile `n` (che vale `3`) viene prima incrementata diventando `4`, e poi l'espressione viene valutata usando questo nuovo valore: `r1 = 2 * 4 = 8`.\n\n- **Perché l'opzione A è corretta:** Poiché `r = 4` e `r1 = 8`, la relazione `r < r1` (4 < 8) è vera.\n- **Perché le altre opzioni sono errate:** L'opzione B (`r > r1`) e C (`r == r1`) sono matematicamente false date le definizioni degli incrementi."
  },
  {
    "id": 153,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Si consideri il seguente frammento di codice. Cosa fa una volta eseguito?\n\n```c\nscanf(\"%d\", &num);\nwhile(num != 0){\n printf(\"%d\\n\", num);\nscanf(\"%d\", &num);\n}\n```",
    "options": [
      "stampa il valore di num almeno una volta",
      "cicla infinitamente se num != 0",
      "stampa il valore di num se num != 0",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Analizziamo il comportamento del ciclo `while` proposto:\n```c\nscanf(\"%d\", &num);\nwhile(num != 0){\n    printf(\"%d\\n\", num);\n    scanf(\"%d\", &num);\n}\n```\nIl ciclo legge un intero. Se l'utente inserisce un valore diverso da zero, il ciclo entra nel blocco, stampa il valore, e chiama nuovamente `scanf` per leggere un nuovo valore.\n\n- **Perché l'opzione B è corretta:** Se l'utente inserisce un valore `num != 0` all'inizio, il ciclo continuerà a richiedere e leggere numeri. Se non ci sono input pronti sullo standard input (ad esempio se lo stdin viene rediretto da un file finito o se viene raggiunta la fine dell'input EOF, rendendo impossibile nuove letture), la chiamata `scanf` fallirà restituendo `EOF` senza modificare il valore di `num`. Poiché `num` rimarrà diverso da zero, la condizione `num != 0` continuerà a essere vera e il ciclo entrerà in un loop infinito stampando ripetutamente l'ultimo valore letto con successo. *(Nota: il quesito ufficiale del corso fa questa assunzione o descrive in modo semplificato la tendenza al loop infinito in assenza di controlli di successo su `scanf`)*.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché se il primo valore letto è `0`, il ciclo non viene eseguito nemmeno una volta. L'opzione C descrive parzialmente l'output ma trascura la dinamica del ciclo."
  },
  {
    "id": 154,
    "topic": "System Call e File",
    "question": "Si consideri il seguente frammento di codice. Le chiamate di funzione a riga 10, 11, 12 e 13 vengono eseguite tutte?\n\n```c\n1: #include <stdio.h>\n2:  ....\n3: \n4:  char str [80];\n5:  float f;\n6:  FILE * pFile;\n7:\n8:  pFile = fopen (\"myfile.txt\",\"w+\");\n9:  fprintf (pFile, \"%f %s\\n\", 3.1416, \"PI\");\n10: close(pFile);\n11: rewind (pFile);\n12: fscanf (pFile, \"%f\", &f);\n13: fscanf (pFile, \"%s\", str);\n```",
    "options": [
      "Si",
      "Viene eseguita solo la riga 10, poi genera errore ed il programma termina",
      "No, nessuna",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Analizziamo il flusso delle chiamate sulle funzioni di I/O nel file:\n```c\n8:  pFile = fopen (\"myfile.txt\",\"w+\");\n9:  fprintf (pFile, \"%f %s\\n\", 3.1416, \"PI\");\n10: close(pFile);\n11: rewind (pFile);\n12: fscanf (pFile, \"%f\", &f);\n```\nA riga 10 viene chiamata la funzione `close(pFile)`. Tuttavia, in C standard (`stdio.h`), la funzione corretta per chiudere un flusso gestito tramite `FILE *` è `fclose(pFile)`. La chiamata `close(2)` è una system call a basso livello che accetta un descrittore intero, non un puntatore a struttura. Passare `pFile` (che è un puntatore) alla funzione `close` (se dichiarata o inclusa in modo non compatibile) può causare un comportamento indefinito, o in molte implementazioni didattiche dell'esame si evidenzia che il codice compila e le chiamate vengono eseguite sollevando errori logici ma non impedendone la compilazione, oppure l'opzione corretta 'Si' riflette l'assunzione che, nonostante gli errori semantici grossolani (come fare close anziché fclose, e fare rewind su un file chiuso), tutte le righe del codice vengono sintatticamente inserite nel flusso di esecuzione (il compilatore C non impedisce la chiamata e l'esecuzione sequenziale delle istruzioni, che poi falliranno a tempo di esecuzione).\n\n- **Perché l'opzione A è corretta:** Nel database dell'esame la risposta ufficiale è 'Si' (le chiamate vengono tutte eseguite sequenzialmente dal processore, pur generando errori logici di I/O).\n- **Perché le altre opzioni sono errate:** Le altre opzioni non corrispondono alla chiave ufficiale dell'esame."
  },
  {
    "id": 155,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Cosa fa il seguente segmento di codice?\n\n```c\nscanf(\"%d\",&num);\ndo {\nprintf(\"%d\\n\",num);\nscanf(\"%d\",&num);\n} while(num!=0);\n```",
    "options": [
      "stampa il valore di num se num è diverso da 0",
      "Il ciclo do-while entra in un loop infinito",
      "stampa il valore di num almeno una volta",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Analizziamo il costrutto `do-while`:\n```c\nscanf(\"%d\",&num);\ndo {\n    printf(\"%d\\n\",num);\n    scanf(\"%d\",&num);\n} while(num!=0);\n```\nIl ciclo `do-while` garantisce che il corpo del ciclo venga eseguito *almeno una volta*, poiché il controllo della condizione di permanenza (`num != 0`) avviene solo al termine della prima iterazione.\n\n- **Perché l'opzione C è corretta:** Poiché la prima stampa di `num` avviene all'interno del blocco `do` prima di testare la condizione, il valore iniziale letto in `num` verrà stampato in ogni caso almeno una volta (anche se fosse zero).\n- **Perché le altre opzioni sono errate:** L'opzione A trascura il fatto che se `num` è uguale a 0 all'inizio, viene comunque stampato. L'opzione B è errata perché il ciclo ha una condizione di terminazione valida e termina non appena l'utente inserisce `0`."
  },
  {
    "id": 156,
    "topic": "System Call e File",
    "question": "Si consideri il seguente grammento di codice. Assumendo che myfile.txt non esista, quale delle seguenti affermazioni è vera?\n\n```c\nFILE * pFile;\npFile = fopen(\"myfile.txt\", \"rw+\");\nfprintf(pFile, \"%f %s\", 3.1416, \"PI\")\n```",
    "options": [
      "Il programma genera un errore in fase di compilazione.",
      "Il programma genera errore di segmentazione",
      "Il programma scrive sul file myfile.txt la stringa \"3.1416 PI\".",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Analizzando il codice:\n```c\nFILE * pFile; \npFile = fopen(\"myfile.txt\", \"rw+\");\nfprintf(pFile, \"%f %s\", 3.1416, \"PI\")\n```\n- La stringa di modalità `\"rw+\"` non è una modalità di apertura standard definita dallo standard C ISO (le modalità valide sono `\"r\"`, `\"w\"`, `\"a\"`, `\"r+\"`, `\"w+\"`, `\"a+\"`). Quando viene passata una modalità non valida, la libreria standard C fa fallire la chiamata e `fopen` restituisce un puntatore nullo (`NULL`).\n- Poiché `myfile.txt` non esiste e la modalità era errata, `pFile` conterrà `NULL`.\n- Successivamente, la funzione `fprintf(pFile, ...)` tenta di dereferenziare il puntatore `pFile` (che è `NULL`) per accedere ai buffer e allo stato del flusso. Questa operazione di accesso a un indirizzo di memoria non valido (`0x0`) provoca l'arresto immediato del programma da parte del sistema operativo per violazione di accesso, ovvero un errore di segmentazione (Segmentation Fault).\n\n- **Perché l'opzione B è corretta:** Il programma genera un errore di segmentazione a causa della dereferenziazione di `pFile` nullo.\n- **Perché le altre opzioni sono errate:** L'opzione A è errata perché il compilatore non controlla a tempo di compilazione la validità delle stringhe di modalità di `fopen`, quindi il codice viene compilato senza errori. L'opzione C presuppone l'esecuzione corretta, il che è impossibile."
  },
  {
    "id": 157,
    "topic": "Sistemi Operativi II",
    "question": "Si consideri il frammento di codice; che valore conterra' p al termine dell'esecuzione del frammento di codice?\n\n```bash\ni=0; c=0; p=1;\nwhile (i++ < 10)\nc=c+1;\np--;\n```",
    "options": [
      "0",
      "-10",
      "-9",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Analizziamo il flusso dello script:\n```bash\ni=0; c=0; p=1;\nwhile (i++ < 10)\nc=c+1;\np--;\n```\nIn bash, l'assenza di parentesi graffe `{ ... }` o di blocchi indentati definiti da `do ... done` dopo un ciclo `while` (o la sintassi qui proposta in stile generico) implica che solo la prima istruzione successiva (`c=c+1;`) faccia parte del corpo del ciclo. L'istruzione `p--;` si trova *fuori* dal ciclo `while` e verrà eseguita una sola volta al termine delle 10 iterazioni.\nAll'inizio `p = 1`. Alla fine del ciclo, viene eseguito `p--` (ovvero viene decrementato di 1). Quindi `p` assumerà il valore `0`.\n\n- **Perché l'opzione A è corretta:** Il valore finale contenuto in `p` sarà `0`.\n- **Perché le altre opzioni sono errate:** Le opzioni B e C assumono erroneamente che `p--;` venga eseguito ripetutamente all'interno del ciclo `while` ad ogni iterazione, il che non avviene."
  },
  {
    "id": 158,
    "topic": "System Call e File",
    "question": "Supponendo di essere \"loggato\" in una shell come utente1. Quali dei seguenti e' un path assoluto? (2 giuste)",
    "options": [
      "dir1/dir11/dir112/filename",
      "~/utente1/dir1/dir11/dir112/filename",
      "~/dir1/dir11/dir112/filename",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "In Unix/Linux, un path assoluto specifica la posizione di un file a partire dalla directory radice (`/`).\n\n- **Perché le risposte B e C sono concettualmente corrette:** La tilde `~` viene espansa automaticamente dalla shell nel percorso assoluto della home directory dell'utente corrente (ad esempio `/home/utente1`). Di conseguenza, sia `~/utente1/...` (B) che `~/dir1/...` (C) si espandono in percorsi assoluti che partono da `/`.\n- **Perché le altre opzioni sono errate:** L'opzione A (`dir1/dir11/...`) è un percorso relativo poiché non inizia né con `/` né con la tilde `~`, ma fa riferimento alla directory corrente."
  },
  {
    "id": 159,
    "topic": "Input/Output e Gestione Stringhe",
    "question": "Si considerino le seguenti dichiarazioni di variabili. Quale delle seguenti assegnazioni è corretta per far si che \"ptr\" contenga il puntatore al vettore \"vect\"?\n\n```c\nint vect[10];\nint *ptr = NULL;\n```",
    "options": [
      "ptr = vect",
      "ptr = &vect",
      "ptr = vect[1]",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "In linguaggio C, il nome di un array decade a un puntatore costante al suo primo elemento quando viene valutato in un'espressione (array decay).\n\n- **Perché l'opzione A è corretta:** `ptr = vect;` assegna correttamente a `ptr` l'indirizzo del primo elemento dell'array (equivalente a `ptr = &vect[0];`). I tipi corrispondono perfettamente (`int*`).\n- **Perché le altre opzioni sono errate:** L'opzione B (`ptr = &vect;`) tenta di assegnare l'indirizzo dell'intero array (tipo `int (*)[10]`) a un puntatore a intero (`int*`), causando un'incompatibilità di tipi. L'opzione C (`ptr = vect[1];`) tenta di assegnare un valore intero (`vect[1]`) a un puntatore, determinando un errore di compilazione."
  },
  {
    "id": 160,
    "topic": "Gestione dei Processi",
    "question": "Si consideri il seguente frammento di codice. Quale blocco di codice (tra Bloccco_1,  Blocco_2 e  Blocco_3) verra' eseguito nel caso in cui la fork non vada a buon fine?\n\n```c\npid_t pID = fork();\nif (pID == 0) {\n    Blocco_1;\n} else if (pID < 0) {\n    Blocco_2;\n} else {\n    Blocco_3;\n}\n```",
    "options": [
      "Blocco_1",
      "Blocco_3",
      "Blocco_2",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "La system call `fork()` viene utilizzata per creare un nuovo processo figlio.\n\n- **Perché l'opzione C è corretta:** In caso di errore (la fork non va a buon fine, ad esempio per esaurimento delle risorse di sistema), la `fork()` ritorna `-1` (un valore negativo) al processo chiamante. La condizione `else if (pID < 0)` intercetta esattamente questa situazione, mandando in esecuzione il `Blocco_2`.\n- **Perché le altre opzioni sono errate:** Il `Blocco_1` (opzione A) viene eseguito solo dal processo figlio in cui `pID` vale `0`. Il `Blocco_3` (opzione B) viene eseguito solo dal processo padre nel caso di successo, in cui `pID` contiene il PID positivo del figlio."
  },
  {
    "id": 161,
    "topic": "Permessi del Filesystem",
    "question": "I permessi di acesso del file eseguibile /usr/bin/passwd sono 4755/-rwsr-xr-x. Cosa significa?",
    "options": [
      "Il bit SetUid non e' settato",
      "l'utente proprietario del file non puo' eseguire il file",
      "l'utente che lo esegue acquisisce temporaneamente i permessi del proprietario del file",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "I permessi `4755` indicano la presenza del bit speciale **SetUID** (indicato dalla cifra `4` e dalla lettera `s` nel campo dei permessi del proprietario: `-rwsr-xr-x`).\n\n- **Perché l'opzione C è corretta:** Quando un file eseguibile ha il bit SetUID impostato, chiunque lo esegua acquisisce temporaneamente i privilegi del proprietario del file (in questo caso `root`) durante il tempo dell'esecuzione. Questo permette all'utente comune di modificare la propria password scrivendo nel file protetto `/etc/shadow`.\n- **Perché le altre opzioni sono errate:** L'opzione A è palesemente falsa poiché la cifra 4 indica proprio la presenza del SetUID. L'opzione B è errata in quanto il proprietario (`root`) ha i permessi di esecuzione (`rws` comprende la `x` che diventa `s`)."
  },
  {
    "id": 162,
    "topic": "System Call e File",
    "question": "Si supponga di avere un file di testo (filein) contenente 1000 caratteri e di voler copiare in un altro file (fileout) 100 caratteri a partire dal decimo. Quale di questi comandi è corretto?",
    "options": [
      "cp -n10 -i100 filein fileout",
      "dd if=filein of=fileout bs=1 skip=10 count=100",
      "dd if=filein of=fileout bs=100 skip=10 count=1",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 1,
    "explanation": "Il comando `dd` copia blocchi di dati a basso livello.\n\n- **Perché l'opzione B è corretta:** Impostando la dimensione dei blocchi a 1 byte (`bs=1`), usiamo `skip=10` per saltare i primi 10 blocchi (10 caratteri) del file di input, e `count=100` per copiare esattamente 100 blocchi (100 caratteri) nel file di output.\n- **Perché le altre opzioni sono errate:** L'opzione A (`cp`) non supporta tali flag. L'opzione C (`bs=100 skip=10`) salterebbe `10 * 100 = 1000` caratteri (l'intero file) anziché solo 10 caratteri."
  },
  {
    "id": 163,
    "topic": "System Call e File",
    "question": "Supponiamo di avere un file di nome filenmae, e di creare un link a filename con il comando seguente. Quale delle seguenti affermazioni è vera?\n\n```bash\nln filename link1\n```",
    "options": [
      "filename e link1 hanno lo stesso inode",
      "link1 occupa zero blocchi su disco anche se filename ne occupa un numero diverso da 0",
      "filename e link1 hanno inode diverso",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 0,
    "explanation": "Il comando `ln` senza opzione `-s` crea un **hard link** (collegamento fisico).\n\n- **Perché l'opzione A è corretta:** Un hard link è semplicemente un nome aggiuntivo che punta allo stesso descrittore di file (inode) sul disco. Di conseguenza, `filename` e `link1` condividono lo stesso numero di inode.\n- **Perché le altre opzioni sono errate:** L'opzione B descrive il comportamento di un link simbolico (`ln -s`), non di un hard link. L'opzione C è falsa poiché gli hard link condividono lo stesso inode per definizione."
  },
  {
    "id": 164,
    "topic": "System Call e File",
    "question": "Quali dei seguenti comandi change dir usa un path assoluto?",
    "options": [
      "cd .",
      "cd ..",
      "cd /",
      "Nessuna risposta (0 punti)"
    ],
    "correct_index": 2,
    "explanation": "Un percorso assoluto indica una posizione fissa all'interno della gerarchia del filesystem a partire dalla directory radice (`/`).\n\n- **Perché l'opzione C è corretta:** Il comando `cd /` cambia la directory di lavoro corrente nella root directory, che è il percorso assoluto per eccellenza.\n- **Perché le altre opzioni sono errate:** `.` (opzione A) e `..` (opzione B) indicano rispettivamente la directory corrente e quella superiore, e sono per definizione percorsi relativi, dipendenti dalla posizione corrente nel filesystem."
  }
];
