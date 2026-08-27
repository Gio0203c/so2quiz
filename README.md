# so2quiz 📝

Ho creato questo sitarello per potersi esercitare e ripassare i quiz a crocette di Sistemi Operativi II (Canale A-L).

---

## 🎮 Modalità disponibili

- 📚 **Esercitazione:** Tutte le domande presenti nel file [`domande_global.js`](domande_global.js) (non sono comprese le vecchie, per quelle è necessario selezionarle dalla tendina). Senza limiti di tempo, con verifica istantanea e con l'opzione di poter cercare domande per parole chiave o filtrarle per argomento.
- 📝 **Simulazione Esame:** Viene generato un esame con 45 domande casuali estratte da [`domande_global.js`](domande_global.js) e un timer da 45 minuti. Il calcolo del punteggio e l'assegnazione del voto in trentesimi (secondo i criteri ufficiali dell'esame) avvengono automaticamente alla consegna.
- 🔄 **Ripasso Errori:** Tiene traccia automatica di tutte le domande che hai sbagliato per fartele riprovare finché non le impari.
- 📖 **Guida Studio:** Cheatsheet veloce con riassunti pratici (fork, puntatori, thread POSIX, permessi ottali, system call, offset con `dd`, ecc.).
- 🔥 **Modalità Hardcore:** Sfida a oltranza: vengono presentate tutte le domande una dopo l'altra. Al primo errore si ricomincia da capo!

---

## 🚀 Come usarlo

Non serve installare nulla:
1. Clona o scarica la repository.
2. Fai doppio click su **`index.html`** per aprirlo direttamente nel tuo browser preferito (Chrome, Firefox, Safari, Edge).

Oppure provalo online tramite **GitHub Pages**:
🔗 **[Live Demo](https://gio0203c.github.io/so2quiz/)**

---

## ⚠️ Disclaimer

Un consiglio spassionato da studente a studente: **usate questa piattaforma DOPO aver studiato la teoria e gli argomenti del corso**, e solo come strumento di autoverifica e ripasso.

Studiare l'esame imparando a memoria le crocette è controproducente: le domande d'esame cambiano spesso dettagli, flag, numeri o frammenti di codice C, e senza aver compreso a fondo i concetti (processi, thread, puntatori, memoria, system call) si rischia seriamente di sbagliare. 

Prima studiate bene il materiale del corso, poi mettetevi alla prova qui!

---

## 📌 Da dove vengono le domande?

Mi sono limitato a raccogliere insieme tutte le domande d'esame che si trovavano in giro su tantissime fonti diverse.

- **Fonti note:** Tra le varie fonti, le 74 domande del formato precedente (5 opzioni, presenti in [`domande_old_type.js`](domande_old_type.js)) e alcune del nuovo tipo inserite nel pool principale, provengono dal progetto open-source [UniQuizzes](https://github.com/dag7dev/UniQuizzes) di **[dag7dev](https://github.com/dag7dev)**, che ringrazio tanto per averle condivise.
- **Revisione:** Tutte le domande e le opzioni sono state revisionate a mano da me e dall'utente **[TheNewHEROBRINEX](https://github.com/TheNewHEROBRINEX)** (a cui va un ringraziamento particolare per l'enorme aiuto!), quindi le risposte corrette dovrebbero essere verificate e affidabili.
- **Nota sull'IA:** Avendo pochissimi giorni a disposizione per mettere in piedi il tutto prima dell'esame, sia il codice dell'interfaccia che la stesura delle spiegazioni (il perché una risposta è giusta o sbagliata) sono stati realizzati con l'aiuto dell'Intelligenza Artificiale. Se doveste trovare qualche piccola imprecisione nelle spiegazioni testuali, aprite pure una issue o una pull request per correggerla!

---

## 📜 Licenza

Rilasciato sotto licenza **GNU General Public License v3.0 (GPLv3)**. Il progetto è e rimarrà sempre gratuito, libero e aperto per tutti gli studenti.
