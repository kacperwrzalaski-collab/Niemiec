const subjectsData = {
  german: {
    name: "Język Niemiecki",
    icon: "🇩🇪",
    study: {
      "wissen": {
        "title": "Czasownik „wissen” (wiedzieć)",
        "html": `
          <h3>Czym jest czasownik „wissen”?</h3>
          <p>Czasownik <strong>wissen</strong> oznacza „wiedzieć” (posiadać informację, wiedzę o czymś). Jest to czasownik nieregularny z grupy tzw. czasowników modalno-podobnych (präteritoprezentia). Oznacza to, że jego odmiana w liczbie pojedynczej diametralnie różni się od standardowych zasad.</p>

          <h3>Dwie żelazne zasady odmiany „wissen”:</h3>
          <ul>
            <li><strong>Zasada 1: Zmiana rdzenia w liczbie pojedynczej.</strong><br>Dla osób <em>ich</em>, <em>du</em> oraz <em>er/sie/es</em> rdzeń <strong>wiss-</strong> zmienia się w <strong>weiß-</strong>.</li>
            <li><strong>Zasada 2: Brak końcówki dla 1. i 3. osoby l. pojedynczej!</strong><br>W formach <strong>ich</strong> oraz <strong>er/sie/es</strong> nie dodajemy końcówki -e ani -t! Obie te osoby mają identyczną, krótką formę: <strong>weiß</strong>.</li>
            <li><strong>Forma dla „du”:</strong> Dodajemy samo <strong>-t</strong> (ponieważ „ß” pełni rolę podwójnego s): <strong>weißt</strong>.</li>
            <li><strong>Liczba mnoga (wir, ihr, sie/Sie):</strong> Wraca tradycyjny rdzeń <strong>wiss-</strong> i standardowe końcówki (-en, -t, -en).</li>
          </ul>

          <h3>Tabela pełnej odmiany:</h3>
          <table>
            <thead><tr><th>Osoba</th><th>Forma niemiecka</th><th>Tłumaczenie na polski</th><th>Wskazówka</th></tr></thead>
            <tbody>
              <tr><td>ich</td><td><strong>weiß</strong></td><td>ja wiem</td><td>Brak końcówki! Nie mówimy „weiße”!</td></tr>
              <tr><td>du</td><td><strong>weißt</strong></td><td>ty wiesz</td><td>Końcówka -t</td></tr>
              <tr><td>er / sie / es</td><td><strong>weiß</strong></td><td>on / ona / ono wie</td><td>Identycznie jak „ich”!</td></tr>
              <tr><td>wir</td><td><strong>wissen</strong></td><td>my wiemy</td><td>Standardowa odmiana regularna</td></tr>
              <tr><td>ihr</td><td><strong>wisst</strong></td><td>wy wiecie</td><td>Standardowa końcówka -t</td></tr>
              <tr><td>sie / Sie</td><td><strong>wissen</strong></td><td>oni wiedzą / Pan, Pani wie</td><td>Forma grzecznościowa i l. mnoga</td></tr>
            </tbody>
          </table>

          <h3>Przykłady w zdaniach z wyjaśnieniem:</h3>
          <div class="examples-container">
            <div class="example-item">
              <div class="example-de">Ich weiß das nicht.</div>
              <div class="example-pl"><em>Nie wiem tego.</em> (Najpopularniejszy zwrot codzienny).</div>
            </div>
            <div class="example-item">
              <div class="example-de">Weißt du, wie spät es ist?</div>
              <div class="example-pl"><em>Czy wiesz, która jest godzina?</em> (W pytaniu orzeczenie ląduje na 1. miejscu).</div>
            </div>
            <div class="example-item">
              <div class="example-de">Er weiß immer alles besser.</div>
              <div class="example-pl"><em>On zawsze wie wszystko lepiej.</em> (Dla „er” forma to weiß, nigdy „weißet”).</div>
            </div>
          </div>
        `
      },
      "time": {
        "title": "Pory dnia i obowiązki domowe",
        "html": `
          <h3>Pory dnia i reguła przyimka „am”</h3>
          <p>W języku niemieckim prawie wszystkie pory dnia mają rodzajnik męski <strong>der</strong> (<em>der Morgen, der Vormittag, der Mittag, der Nachmittag, der Abend</em>). Kiedy chcemy powiedzieć, że coś dzieje się „w daną porę dnia”, używamy połączenia przyimka <em>an</em> z rodzajnikiem celownika <em>dem</em>, co tworzy zrost <strong>am</strong> (an + dem = am).</p>

          <ul>
            <li><strong>am Morgen</strong> – rano</li>
            <li><strong>am Vormittag</strong> – przed południem</li>
            <li><strong>am Mittag</strong> – w południe</li>
            <li><strong>am Nachmittag</strong> – po południu</li>
            <li><strong>am Abend</strong> – wieczorem</li>
          </ul>

          <p><strong>🚨 WAŻNY WYJĄTEK – NOC:</strong> Noc po niemiecku jest rodzaju żeńskiego: <strong>die Nacht</strong>. Z tego powodu nie mówimy <em>am Nacht</em>, lecz: <span class="highlight">in der Nacht</span> (w nocy)!</p>

          <h3>Obowiązki domowe (Die Pflichten im Haushalt)</h3>
          <p>Czasowniki rozdzielnie złożone (np. <em>aufräumen</em>, <em>rausbringen</em>) w zdaniu rozdzielają się: przedrostek wędruje na sam koniec zdania!</p>
          <table>
            <thead><tr><th>Zwrot niemiecki</th><th>Znaczenie</th><th>Przykład użycia w zdaniu</th></tr></thead>
            <tbody>
              <tr><td>das Zimmer aufräumen</td><td>sprzątać pokój</td><td>Ich <strong>räume</strong> mein Zimmer <strong>auf</strong>.</td></tr>
              <tr><td>den Müll rausbringen</td><td>wynosić śmieci</td><td>Er <strong>bringt</strong> den Müll <strong>raus</strong>.</td></tr>
              <tr><td>Staub saugen</td><td>odkurzać</td><td>Am Samstag <strong>saugt</strong> sie Staub.</td></tr>
              <tr><td>das Geschirr spülen</td><td>zmywać naczynia</td><td>Wir <strong>spülen</strong> das Geschirr nach dem Essen.</td></tr>
              <tr><td>das Bett machen</td><td>ścielić łóżko</td><td>Morgens <strong>mache</strong> ich mein Bett.</td></tr>
              <tr><td>den Tisch decken</td><td>nakrywać do stołu</td><td>Wer <strong>deckt</strong> heute den Tisch?</td></tr>
              <tr><td>Blumen gießen</td><td>podlewać kwiaty</td><td>Ich <strong>gieße</strong> die Blumen am Nachmittag.</td></tr>
            </tbody>
          </table>
        `
      },
      "time_sentences": {
        "title": "Oś czasu i zwroty złożone",
        "html": `
          <h3>Oś czasu dni (Chronologia)</h3>
          <p>Aby swobodnie planować wydarzenia i opowiadać o przeszłości, musisz znać chronologiczny układ dni:</p>
          <div class="example-item" style="text-align: center; margin: 12px 0;">
            <strong>vorgestern</strong> (przedwczoraj) ➔ <strong>gestern</strong> (wczoraj) ➔ <strong>heute</strong> (dzisiaj) ➔ <strong>morgen</strong> (jutro) ➔ <strong>übermorgen</strong> (pojutrze)
          </div>

          <h3>Łączenie dni z porami dnia (Zasady pisowni)</h3>
          <ul>
            <li>Jeśli łączysz słowo określające dzień z porą dnia, słowo oznaczające porę piszemy <strong>wielką literą</strong>:
              <br><em>heute Abend</em> (dziś wieczorem), <em>gestern Nachmittag</em> (wczoraj po południu).
            </li>
            <li><strong>Zwróć uwagę na wielkość litery słowa morgen:</strong>
              <br>• <strong>morgen</strong> (małą literą) = jutro.
              <br>• <strong>der Morgen / am Morgen</strong> (wielką literą) = poranek / rano.
            </li>
            <li><strong>🚨 Wyjątek „jutro rano”:</strong> Niemcy unikają powtórzenia <em>morgen Morgen</em>. Zamiast tego stosują utarty zwrot: <span class="highlight">morgen früh</span> (dosłownie: jutro wcześnie / jutro rano).</li>
            <li><strong>Przysłówki powtarzalne z końcówką -s:</strong> Jeśli czynność powtarza się regularnie, dodajemy na końcu literę -s i piszemy małą literą:
              <br><em>morgens</em> (rankami / co rano), <em>abends</em> (wieczorami), <em>nachts</em> (nocami).
            </li>
          </ul>
        `
      }
    },
    topics: [
      { id: "wissen", title: "1. Czasownik „wissen”", desc: "25 pytań: odmiana przez osoby, proste zdania" },
      { id: "time", title: "2. Pory dnia i obowiązki domowe", desc: "25 pytań: pory dnia, reguła 'am', 'in der Nacht', sprzątanie" },
      { id: "time_sentences", title: "3. Oś czasu i zwroty złożone", desc: "25 pytań: heute, morgen, gestern, vorgestern, übermorgen" }
    ],
    questions: {
      wissen: [
        { prompt: "Uzupełnij: Ich _____ das nicht.", options: ["wissen", "wisse", "weiß", "weißt"], answer: 2 },
        { prompt: "Uzupełnij: _____ du die Antwort?", options: ["Weißt", "Weiß", "Wissen", "Wisst"], answer: 0 },
        { prompt: "Uzupełnij: Er _____ alles.", options: ["weißt", "wissen", "weiß", "wisst"], answer: 2 },
        { prompt: "Uzupełnij: Sie (ona) _____ den Weg.", options: ["weißt", "weiß", "wissen", "wisst"], answer: 1 },
        { prompt: "Uzupełnij: Es _____ noch nichts.", options: ["weiß", "weißt", "wissen", "wisst"], answer: 0 },
        { prompt: "Uzupełnij: Wir _____ die Lösung.", options: ["wisst", "weißen", "wissen", "weiß"], answer: 2 },
        { prompt: "Uzupełnij: _____ ihr, wo das Buch ist?", options: ["Weißt", "Wisst", "Wissen", "Weiß"], answer: 1 },
        { prompt: "Uzupełnij: Sie (oni) _____ den Termin.", options: ["weißt", "wisst", "weiß", "wissen"], answer: 3 },
        { prompt: "Uzupełnij: Herr Müller, _____ Sie das?", options: ["weiß", "wissen", "wisst", "weißt"], answer: 1 },
        { prompt: "Co znaczy zdanie: 'Ich weiß es nicht'?", options: ["Nie mam tego.", "Nie wiem tego.", "Nie mówię tego.", "Nie robię tego."], answer: 1 },
        { prompt: "Która para ma identyczną formę czasownika wissen?", options: ["du oraz er", "wir oraz ihr", "ich oraz er", "ich oraz du"], answer: 2 },
        { prompt: "Uzupełnij: Mein Freund _____ die Handynummer.", options: ["wissen", "weißt", "weiß", "wisst"], answer: 2 },
        { prompt: "Uzupełnij: Anna und Tom _____ schon Bescheid.", options: ["weißt", "wissen", "weiß", "wisst"], answer: 1 },
        { prompt: "Która forma czasownika jest CAŁKOWICIE BŁĘDNA?", options: ["du weißt", "wir wissen", "ich weiß", "ich wisse"], answer: 3 },
        { prompt: "Uzupełnij: Du _____ immer alles besser!", options: ["weißt", "weiß", "wisst", "wissen"], answer: 0 },
        { prompt: "Uzupełnij: Meine Schwester _____ nicht, wo ihre Tasche ist.", options: ["wissen", "weißt", "wisst", "weiß"], answer: 3 },
        { prompt: "Uzupełnij: Wir _____ nicht, wie spät es ist.", options: ["wisst", "weißen", "weiß", "wissen"], answer: 3 },
        { prompt: "Uzupełnij: _____ ihr die Telefonnummer von Paul?", options: ["Weißt", "Wisst", "Weiß", "Wissen"], answer: 1 },
        { prompt: "Uzupełnij: Ich _____ genau, was du meinst.", options: ["wisse", "weißt", "weiß", "wisst"], answer: 2 },
        { prompt: "Uzupełnij: Er _____ nicht, wo das Heft liegt.", options: ["weiß", "weißt", "wissen", "wisst"], answer: 0 },
        { prompt: "Uzupełnij: Frau Schmidt, _____ Sie die Adresse?", options: ["wisst", "wissen", "weißt", "weiß"], answer: 1 },
        { prompt: "Uzupełnij: Die Schüler _____ die Antwort.", options: ["weißt", "wissen", "weiß", "wisst"], answer: 1 },
        { prompt: "Uzupełnij: _____ du, wer heute fehlt?", options: ["Wissen", "Weiß", "Wisst", "Weißt"], answer: 3 },
        { prompt: "Co znaczy: 'Wir wissen alles'?", options: ["Robimy wszystko.", "Wiemy wszystko.", "Chcemy wszystko.", "Mamy wszystko."], answer: 1 },
        { prompt: "Uzupełnij: Jan und ich _____ das schon.", options: ["weiß", "weißt", "wisst", "wissen"], answer: 3 }
      ],
      time: [
        { prompt: "Jak powiesz po niemiecku: 'rano'?", options: ["am Morgen", "in der Morgen", "um Morgen", "im Morgen"], answer: 0 },
        { prompt: "Jak powiesz po niemiecku: 'wieczorem'?", options: ["im Abend", "am Abend", "um Abend", "in der Abend"], answer: 1 },
        { prompt: "Jak powiesz: 'w południe'?", options: ["im Mittag", "nach Mittag", "am Mittag", "in der Mittag"], answer: 2 },
        { prompt: "Jak powiesz: 'przed południem'?", options: ["im Vormittag", "am Vormittag", "am Mittag", "am Nachmittag"], answer: 1 },
        { prompt: "Jak powiesz: 'po południu'?", options: ["am Vormittag", "am Nachmittag", "nach dem Tag", "in der Nachmittag"], answer: 1 },
        { prompt: "Które określenie łączy się z 'in der' zamiast 'am'?", options: ["der Morgen", "der Abend", "die Nacht", "der Mittag"], answer: 2 },
        { prompt: "Jak poprawnie powiesz: 'w nocy'?", options: ["um Nacht", "am Nacht", "im Nacht", "in der Nacht"], answer: 3 },
        { prompt: "Co oznacza zdanie: 'Am Morgen räume ich mein Zimmer auf'?", options: ["Wieczorem sprzątam pokój.", "Zmywam naczynia.", "Ścielę łóżko.", "Rano sprzątam mój pokój."], answer: 3 },
        { prompt: "Co oznacza: 'Staub saugen'?", options: ["myć okna", "ścierać kurze", "odkurzać", "zmywać"], answer: 2 },
        { prompt: "Co oznacza: 'den Müll rausbringen'?", options: ["sprzątać pokój", "segregować butelki", "myć podłogę", "wynosić śmieci"], answer: 3 },
        { prompt: "Co oznacza: 'das Geschirr spülen'?", options: ["zmywać naczynia", "gotować", "nakrywać do stołu", "robić zakupy"], answer: 0 },
        { prompt: "Co oznacza: 'das Bett machen'?", options: ["kupować łóżko", "ścielić łóżko", "naprawiać łóżko", "wietrzyć pokój"], answer: 1 },
        { prompt: "Uzupełnij: Am Abend bringe ich den _____ raus.", options: ["Hund", "Tisch", "Staub", "Müll"], answer: 3 },
        { prompt: "Uzupełnij: Am Nachmittag gieße ich die _____.", options: ["Zimmer", "Blumen", "Betten", "Geschirr"], answer: 1 },
        { prompt: "Co oznacza: 'den Tisch decken'?", options: ["sprzątać ze stołu", "myć stół", "nakrywać do stołu", "kupować stół"], answer: 2 },
        { prompt: "Jaki rodzajnik mają słowa: Morgen, Mittag, Abend?", options: ["der", "die", "das", "den"], answer: 0 },
        { prompt: "Co oznacza: 'das Zimmer aufräumen'?", options: ["wietrzyć pokój", "sprzątać pokój", "zamykać pokój", "malować pokój"], answer: 1 },
        { prompt: "Co oznacza: 'kochen'?", options: ["zmywać", "sprzątać", "prasować", "gotować"], answer: 3 },
        { prompt: "Co oznacza: 'einkaufen gehen'?", options: ["iść spać", "iść na zakupy", "iść do szkoły", "iść na spacer"], answer: 1 },
        { prompt: "Uzupełnij: In _____ Nacht schlafen alle.", options: ["den", "der", "das", "dem"], answer: 1 },
        { prompt: "Co oznacza: 'den Boden wischen'?", options: ["myć podłogę", "ścielić łóżko", "zamiatać podwórko", "odkurzać"], answer: 0 },
        { prompt: "Co oznacza: 'Fenster putzen'?", options: ["zamykać okna", "kupować firanki", "otwierać okna", "myć okna"], answer: 3 },
        { prompt: "Co robisz 'am Mittag'?", options: ["jem obiad / gotuję", "zmywam po kolacji", "wstaję z łóżka", "idę spać"], answer: 0 },
        { prompt: "Co oznacza: 'die Wäsche waschen'?", options: ["prać ubrania", "prasować", "kupować ubrania", "wieszać firanki"], answer: 0 },
        { prompt: "Uzupełnij: Am Morgen mache ich mein _____.", options: ["Bett", "Zimmer", "Müll", "Tisch"], answer: 0 }
      ],
      time_sentences: [
        { prompt: "Co oznacza słowo: 'heute'?", options: ["dzisiaj", "wczoraj", "pojutrze", "jutro"], answer: 0 },
        { prompt: "Co oznacza słowo: 'gestern'?", options: ["jutro", "wczoraj", "przedwczoraj", "dzisiaj"], answer: 1 },
        { prompt: "Co oznacza słowo: 'morgen' (małą literą)?", options: ["dzisiaj", "rano", "jutro", "wczoraj"], answer: 2 },
        { prompt: "Co oznacza słowo: 'vorgestern'?", options: ["pojutrze", "jutro", "wczoraj", "przedwczoraj"], answer: 3 },
        { prompt: "Co oznacza słowo: 'übermorgen'?", options: ["jutro", "dzisiaj", "przedwczoraj", "pojutrze"], answer: 3 },
        { prompt: "Jak naturalnie powiesz: 'jutro rano'?", options: ["morgens früh", "heute früh", "morgen früh", "morgen Morgen"], answer: 2 },
        { prompt: "Jak powiesz: 'dziś rano'?", options: ["morgens heute", "heute Morgen", "morgen früh", "gestern Morgen"], answer: 1 },
        { prompt: "Jak powiesz: 'dziś wieczorem'?", options: ["morgen Abend", "abends", "gestern Abend", "heute Abend"], answer: 3 },
        { prompt: "Jak powiesz: 'wczoraj wieczorem'?", options: ["morgen Abend", "vorgestern Abend", "gestern Abend", "heute Abend"], answer: 2 },
        { prompt: "Jak powiesz: 'pojutrze po południu'?", options: ["vorgestern Nachmittag", "morgen Nachmittag", "gestern Nachmittag", "übermorgen Nachmittag"], answer: 3 },
        { prompt: "Co oznacza przysłówek: 'abends'?", options: ["wieczorami / co wieczór", "wczoraj wieczorem", "jutro wieczorem", "tylko dzisiaj"], answer: 0 },
        { prompt: "Co oznacza przysłówek: 'morgens'?", options: ["dziś rano", "jutro rano", "przedwczoraj", "rankami / co rano"], answer: 3 },
        { prompt: "Co oznacza przysłówek: 'nachts'?", options: ["jutro w nocy", "tylko dziś", "nocami / w nocy", "wczoraj w nocy"], answer: 2 },
        { prompt: "Uporządkuj chronologicznie: 'wczoraj -> dzisiaj -> jutro'", options: ["morgen, heute, gestern", "vorgestern, heute, morgen", "heute, gestern, morgen", "gestern, heute, morgen"], answer: 3 },
        { prompt: "Uporządkuj chronologicznie: 'dzisiaj -> jutro -> pojutrze'", options: ["heute, übermorgen, morgen", "gestern, heute, morgen", "heute, morgen, übermorgen", "morgen, heute, übermorgen"], answer: 2 },
        { prompt: "Przetłumacz: 'Przedwczoraj byłem w domu'.", options: ["Vorgestern war ich zu Hause.", "Heute bin ich zu Hause.", "Gestern war ich zu Hause.", "Übermorgen bin ich zu Hause."], answer: 0 },
        { prompt: "Jak powiesz: 'przedwczoraj rano'?", options: ["morgen früh", "gestern Morgen", "vorgestern Morgen", "übermorgen Morgen"], answer: 2 },
        { prompt: "Jak powiesz: 'jutro po południu'?", options: ["morgen Nachmittag", "vorgestern Nachmittag", "gestern Nachmittag", "heute Nachmittag"], answer: 0 },
        { prompt: "Co oznacza przysłówek: 'mittags'?", options: ["w nocy", "w południa / co południe", "wieczorem", "rano"], answer: 1 },
        { prompt: "Przetłumacz: 'Dziś po południu gram w piłkę'.", options: ["Gestern Nachmittag...", "Vorgestern Abend...", "Morgen früh...", "Heute Nachmittag spiele ich Fußball."], answer: 3 },
        { prompt: "Przetłumacz: 'Jutro wieczorem idę do kina'.", options: ["Gestern Abend...", "Heute Morgen...", "Morgen Abend gehe ich ins Kino.", "Vorgestern..."], answer: 2 },
        { prompt: "Jak powiesz: 'wczoraj przed południem'?", options: ["heute Vormittag", "gestern Vormittag", "übermorgen Vormittag", "morgen Vormittag"], answer: 1 },
        { prompt: "Co oznacza przysłówek: 'nachmittags'?", options: ["rankami", "popołudniami", "w południe", "w nocy"], answer: 1 },
        { prompt: "Uzupełnij: _____ (pojutrze) habe ich keine Schule.", options: ["Übermorgen", "Vorgestern", "Gestern", "Nachts"], answer: 0 },
        { prompt: "Przetłumacz: 'Wczoraj sprzątałem mój pokój'.", options: ["Morgen...", "Übermorgen...", "Heute Abend...", "Gestern habe ich mein Zimmer aufgeräumt."], answer: 3 }
      ]
    }
  },
  math: {
    name: "Matematyka",
    icon: "📐",
    study: {
      "order_ops": {
        "title": "Kolejność wykonywania działań",
        "html": `
          <h3>Dlaczego kolejność działań ma znaczenie?</h3>
          <p>W matematyce nie liczymy po prostu od lewej do prawej. Istnieje ustalona hierarchia pierwszeństwa. Jeśli jej nie zachowasz, otrzymasz zupełnie zły wynik!</p>

          <h3>Ścisła hierarchia obliczeń (Krok po kroku):</h3>
          <ol>
            <li><strong>1. Działania w nawiasach:</strong> Zawsze wykonujesz najpierw to, co jest zamknięte w nawiasie (od najbardziej wewnętrznych).</li>
            <li><strong>2. Potęgowanie i pierwiastkowanie:</strong> Jeśli w wyrażeniu są potęgi (np. 2³) lub pierwiastki (np. √16), obliczasz je przed mnożeniem i dzieleniem.</li>
            <li><strong>3. Mnożenie i dzielenie:</strong> Mają pierwszeństwo przed dodawaniem i odejmowaniem! Jeśli masz obok siebie mnożenie i dzielenie, wykonujesz je <em>od lewej do prawej</em>.</li>
            <li><strong>4. Dodawanie i odejmowanie:</strong> Wykonujesz je na samym końcu, również <em>od lewej do prawej</em>.</li>
          </ol>

          <h3>Klasyczne pułapki i przykłady:</h3>
          <div class="examples-container">
            <div class="example-item">
              <div class="example-de">Pułapka: 2 + 2 · 2 = ?</div>
              <div class="example-pl">
                ❌ <strong>Błąd:</strong> (2 + 2) · 2 = 4 · 2 = 8.<br>
                ✔️ <strong>Prawidłowo:</strong> Najpierw mnożenie: 2 · 2 = 4. Następnie dodawanie: 2 + 4 = <strong>6</strong>.
              </div>
            </div>
            <div class="example-item">
              <div class="example-de">Przykład z nawiasem: (5 + 3) · 2 = ?</div>
              <div class="example-pl">
                Nawias ma absolutne pierwszeństwo: 5 + 3 = 8.<br>
                Dopiero teraz mnożymy: 8 · 2 = <strong>16</strong>.
              </div>
            </div>
            <div class="example-item">
              <div class="example-de">Dzielenie i mnożenie po sobie: 16 : 4 · 2 = ?</div>
              <div class="example-pl">
                Mnożenie i dzielenie są równe rangą, więc liczymy od lewej do prawej:<br>
                16 : 4 = 4 ➔ następnie 4 · 2 = <strong>8</strong>. (Gdybyś najpierw pomnożył 4·2=8, dostałbyś zły wynik 16:8=2!).
              </div>
            </div>
          </div>
        `
      },
      "powers_roots": {
        "title": "Potęgi i pierwiastki",
        "html": `
          <h3>Zrozumienie potęgowania: Co oznacza aⁿ?</h3>
          <p>Potęgowanie to nic innego jak skrócony zapis wielokrotnego mnożenia tej samej liczby przez samą siebie:</p>
          <ul>
            <li><strong>a</strong> to <strong>podstawa potęgi</strong> (liczba, którą będziesz mnożyć).</li>
            <li><strong>n</strong> to <strong>wykładnik potęgi</strong> (mówi, <em>ile razy</em> musisz pomnożyć podstawę przez siebie).</li>
            <li><strong>Przykład:</strong> 2³ oznacza: pomnóż trójkę dwójek ➔ 2 · 2 · 2 = <strong>8</strong> (nie 2·3=6!).</li>
          </ul>

          <h3>Dwie najważniejsze zasady pamięciowe:</h3>
          <ul>
            <li><strong>Dowolna liczba do potęgi 0 równa się 1:</strong> $a^0 = 1$ (np. $5^0 = 1$, $100^0 = 1$).</li>
            <li><strong>Dowolna liczba do potęgi 1 to po prostu ta sama liczba:</strong> $a^1 = a$ (np. $7^1 = 7$).</li>
          </ul>

          <h3>Czym jest pierwiastek kwadratowy ($\sqrt{a}$)?</h3>
          <p>Pierwiastkowanie to operacja odwrotna do potęgowania. Kiedy pytamy o <strong>√a</strong>, zadajemy sobie proste pytanie: <em>„Jaka liczba nieujemna podniesiona do kwadratu (pomnożona sama przez siebie) da to, co jest pod pierwiastkiem?”</em></p>

          <table>
            <thead><tr><th>Potęga</th><th>Wynik</th><th>Pierwiastek odwrotny</th><th>Uzasadnienie</th></tr></thead>
            <tbody>
              <tr><td>2² = 2 · 2</td><td>4</td><td>√4 = <strong>2</strong></td><td>bo 2 · 2 = 4</td></tr>
              <tr><td>3² = 3 · 3</td><td>9</td><td>√9 = <strong>3</strong></td><td>bo 3 · 3 = 9</td></tr>
              <tr><td>4² = 4 · 4</td><td>16</td><td>√16 = <strong>4</strong></td><td>bo 4 · 4 = 16</td></tr>
              <tr><td>5² = 5 · 5</td><td>25</td><td>√25 = <strong>5</strong></td><td>bo 5 · 5 = 25</td></tr>
              <tr><td>8² = 8 · 8</td><td>64</td><td>√64 = <strong>8</strong></td><td>bo 8 · 8 = 64</td></tr>
              <tr><td>10² = 10 · 10</td><td>100</td><td>√100 = <strong>10</strong></td><td>bo 10 · 10 = 100</td></tr>
            </tbody>
          </table>
        `
      },
      "equations": {
        "title": "Równania liniowe z jedną niewiadomą (x)",
        "html": `
          <h3>Czym jest równanie z niewiadomą x?</h3>
          <p>Równanie to waga szalkowa, która znajduje się w idealnej równowadze. Znak równości <strong>=</strong> oznacza, że lewa strona waży dokładnie tyle samo, co prawa strona. Twoim celem jest dowiedzieć się, ile wynosi ukryta liczba <strong>x</strong>.</p>

          <h3>Złote zasady rozwiązywania równań (Krok po kroku):</h3>
          <ul>
            <li><strong>Krok 1: Segregacja stron.</strong> Przenosimy wszystkie wyrażenia z <strong>x</strong> na lewą stronę, a wszystkie czyste liczby na prawą stronę.</li>
            <li><strong>Krok 2: Zmiana znaku przy przekraczaniu „=”!</strong> Za każdym razem, gdy przenosisz liczbę lub x na drugą stronę znaku równości, <strong>zmieniasz jej znak na przeciwny</strong>:
              <br>• plus (+) zmienia się w minus (-)
              <br>• minus (-) zmienia się w plus (+)
            </li>
            <li><strong>Krok 3: Redukcja.</strong> Dodajesz do siebie x-y po lewej stronie i liczby po prawej stronie.</li>
            <li><strong>Krok 4: Ostateczne dzielenie.</strong> Dzielisz obie strony równania przez liczbę stojącą bezpośrednio przy x.</li>
          </ul>

          <h3>Rozpisany przykład krok po kroku:</h3>
          <div class="examples-container">
            <div class="example-item">
              <div class="example-de">Przykład: 3x + 5 = 20</div>
              <div class="example-pl">
                <strong>1.</strong> Przenosimy +5 na prawą stronę (zmienia się w -5):<br>
                3x = 20 - 5<br>
                <strong>2.</strong> Obliczamy prawą stronę:<br>
                3x = 15<br>
                <strong>3.</strong> Dzielimy obie strony przez 3 (bo przy x stoi 3):<br>
                x = 15 : 3 ➔ <strong>x = 5</strong>.
              </div>
            </div>
            <div class="example-item">
              <div class="example-de">Przykład: 2x - 8 = 10</div>
              <div class="example-pl">
                Przenosimy -8 na prawą stronę ze zmianą na +8:<br>
                2x = 10 + 8 ➔ 2x = 18 ➔ x = 18 : 2 ➔ <strong>x = 9</strong>.
              </div>
            </div>
          </div>
        `
      },
      "linear_func": {
        "title": "Funkcja liniowa na układzie współrzędnych",
        "html": `
          <h3>Wzór prostej: y = ax + b (lub f(x) = ax + b)</h3>
          <p>Wykresem każdej funkcji liniowej na układzie współrzędnych jest <strong>prosta</strong>. Każdy punkt należący do tej prostej zapisujemy jako parę liczb <strong>(x, y)</strong>:</p>
          <ul>
            <li><strong>x</strong> – pierwsza współrzędna (argument). Odczytujemy ją na <strong>poziomej osi OX</strong>.</li>
            <li><strong>y</strong> – druga współrzędna (wartość). Odczytujemy ją na <strong>pionowej osi OY</strong>.</li>
          </ul>

          <h3>Co oznaczają liczby „a” oraz „b” we wzorze?</h3>
          <p>Wzór <strong>y = ax + b</strong> to matematyczny przepis budowy prostej:</p>
          <ul>
            <li><strong>1. Liczba „a” (współczynnik kierunkowy):</strong> decyduje o tym, pod jakim kątem prosta biegnie przez osie:
              <ul>
                <li><strong>Gdy a > 0 (liczba dodatnia, np. y = 2x + 1):</strong> prosta jest <strong>ROSNĄCA</strong>. Idąc wzrokiem od lewej do prawej, linia wspina się w górę.</li>
                <li><strong>Gdy a < 0 (liczba ujemna, np. y = -3x + 4):</strong> prosta jest <strong>MALEJĄCA</strong>. Idąc od lewej do prawej, linia opada w dół.</li>
                <li><strong>Gdy a = 0 (np. y = 4):</strong> prosta jest <strong>STAŁA</strong>. Jest idealnie poziomą linią równoległą do osi OX.</li>
              </ul>
            </li>
            <li><strong>2. Liczba „b” (wyraz wolny):</strong> to punkt, w którym prosta uderza w <strong>pionową oś OY</strong>. Współrzędne tego punktu to zawsze <strong>(0, b)</strong>!
              <br><em>Przykład:</em> Dla prostej $y = 3x - 5$, liczba $b = -5$. Oznacza to, że wykres przecina pionową oś OY dokładnie na wysokości -5, w punkcie <strong>(0, -5)</strong>.
            </li>
          </ul>

          <h3>Miejsce zerowe (Przecięcie z osią poziomą OX)</h3>
          <p>Miejsce zerowe to punkt na poziomej osi OX, gdzie prosta ma wysokość zero ($y = 0$). Aby je wyliczyć, po prostu wstawiasz 0 zamiast y:</p>
          <div class="example-item">
            <div class="example-de">Przykład wyliczenia miejsca zerowego dla y = 2x - 6:</div>
            <div class="example-pl">
              Wstawiamy y = 0:<br>
              0 = 2x - 6 ➔ 2x = 6 ➔ x = 3.<br>
              Punkt przecięcia z osią OX to <strong>(3, 0)</strong>.
            </div>
          </div>

          <h3>Jak sprawdzić, czy dany punkt (x, y) leży na prostej?</h3>
          <p>Wystarczy podstawić pierwszą liczbę punktu za <strong>x</strong> do wzoru i sprawdzić, czy wyliczony wynik da drugą liczbę <strong>y</strong>:</p>
          <div class="example-item">
            <div class="example-de">Czy punkt A = (2, 7) leży na prostej y = 3x + 1?</div>
            <div class="example-pl">
              Podstawiamy x = 2:<br>
              y = 3 · 2 + 1 = 6 + 1 = 7.<br>
              Wyliczona wartość to 7, co jest równe współrzędnej y punktu A. Odpowiedź: <strong>TAK, punkt leży na prostej!</strong>
            </div>
          </div>

          <h3>Dwie proste w układzie współrzędnych:</h3>
          <ul>
            <li><strong>Proste RÓWNOLEGŁE (nigdy się nie przetną):</strong> Mają dokładnie taki sam współczynnik <strong>a</strong>!
              <br><em>Przykład:</em> Proste $y = 4x + 2$ oraz $y = 4x - 9$ są równoległe, bo w obu $a = 4$.
            </li>
            <li><strong>Proste PROSTOPADŁE (przecinają się pod kątem 90°):</strong> Ich współczynniki pomnożone przez siebie dają -1 ($a_1 \cdot a_2 = -1$). Drugi współczynnik to odwrócony i przeciwny znak pierwszego!
              <br><em>Przykład:</em> Prostopadłą do prostej o $a = 2$ jest prosta o $a = -\frac{1}{2}$ (czyli -0.5), ponieważ $2 \cdot (-0.5) = -1$.
            </li>
          </ul>
        `
      }
    },
    topics: [
      { id: "order_ops", title: "1. Kolejność działań", desc: "25 zadań: nawiasy, mnożenie, dzielenie, kolejność" },
      { id: "powers_roots", title: "2. Potęgi i pierwiastki", desc: "25 zadań: kwadraty, sześciany, pierwiastki kwadratowe" },
      { id: "equations", title: "3. Równania liniowe", desc: "25 zadań: wyznaczanie niewiadomej x" },
      { id: "linear_func", title: "4. Funkcja liniowa", desc: "25 zadań: y = ax + b, współczynniki a i b, osie OX/OY, proste na płaszczyźnie" }
    ],
    questions: {
      order_ops: [
        { prompt: "Ile to jest: 2 + 2 · 2?", options: ["8", "6", "4", "10"], answer: 1 },
        { prompt: "Ile to jest: (3 + 5) · 2?", options: ["16", "13", "10", "15"], answer: 0 },
        { prompt: "Ile to jest: 10 - 4 : 2?", options: ["3", "7", "8", "6"], answer: 2 },
        { prompt: "Ile to jest: 15 : 3 + 2?", options: ["7", "3", "5", "8"], answer: 0 },
        { prompt: "Ile to jest: 20 - 3 · 5?", options: ["25", "5", "10", "15"], answer: 1 },
        { prompt: "Ile to jest: (12 - 4) : 4?", options: ["2", "4", "8", "1"], answer: 0 },
        { prompt: "Ile to jest: 6 + 12 : 3?", options: ["6", "10", "8", "4"], answer: 1 },
        { prompt: "Ile to jest: 4 · (2 + 3)?", options: ["20", "14", "24", "11"], answer: 0 },
        { prompt: "Ile to jest: 18 - 8 + 2?", options: ["8", "12", "10", "14"], answer: 1 },
        { prompt: "Ile to jest: 24 : 6 : 2?", options: ["8", "4", "2", "6"], answer: 2 },
        { prompt: "Ile to jest: 5 · 5 - 5?", options: ["0", "20", "25", "15"], answer: 1 },
        { prompt: "Ile to jest: 30 : (2 + 3)?", options: ["18", "6", "12", "8"], answer: 1 },
        { prompt: "Ile to jest: 7 + 3 · (4 - 2)?", options: ["20", "13", "14", "15"], answer: 1 },
        { prompt: "Ile to jest: 100 - 20 · 4?", options: ["320", "20", "40", "80"], answer: 1 },
        { prompt: "Ile to jest: 9 : 3 · 3?", options: ["1", "9", "6", "3"], answer: 1 },
        { prompt: "Ile to jest: (10 + 2) · (10 - 8)?", options: ["24", "20", "12", "22"], answer: 0 },
        { prompt: "Ile to jest: 50 - 10 : 2 + 5?", options: ["25", "50", "40", "45"], answer: 1 },
        { prompt: "Ile to jest: 8 + 2 · 0?", options: ["0", "10", "8", "2"], answer: 2 },
        { prompt: "Ile to jest: (6 · 4) : (3 · 2)?", options: ["4", "6", "8", "2"], answer: 0 },
        { prompt: "Ile to jest: 40 - 5 · 6 + 2?", options: ["12", "212", "10", "8"], answer: 0 },
        { prompt: "Ile to jest: 16 : 4 · 2?", options: ["2", "8", "4", "16"], answer: 1 },
        { prompt: "Ile to jest: (15 - 5 · 2) + 8?", options: ["13", "28", "15", "18"], answer: 0 },
        { prompt: "Ile to jest: 14 + 6 · 3 - 2?", options: ["30", "58", "32", "28"], answer: 0 },
        { prompt: "Ile to jest: 3 · (10 - 2 · 3)?", options: ["12", "24", "18", "9"], answer: 0 },
        { prompt: "Ile to jest: (100 : 10) : (10 : 2)?", options: ["5", "1", "2", "4"], answer: 2 }
      ],
      powers_roots: [
        { prompt: "Ile wynosi 3²?", options: ["6", "9", "8", "12"], answer: 1 },
        { prompt: "Ile wynosi 2³?", options: ["6", "8", "9", "16"], answer: 1 },
        { prompt: "Ile wynosi √16?", options: ["2", "8", "4", "6"], answer: 2 },
        { prompt: "Ile wynosi 5²?", options: ["10", "25", "20", "50"], answer: 1 },
        { prompt: "Ile wynosi √49?", options: ["6", "8", "7", "9"], answer: 2 },
        { prompt: "Ile wynosi 4²?", options: ["8", "16", "12", "20"], answer: 1 },
        { prompt: "Ile wynosi 10²?", options: ["20", "100", "1000", "50"], answer: 1 },
        { prompt: "Ile wynosi √81?", options: ["7", "8", "9", "11"], answer: 2 },
        { prompt: "Ile wynosi 2⁴?", options: ["8", "16", "12", "32"], answer: 1 },
        { prompt: "Ile wynosi √100?", options: ["10", "50", "20", "5"], answer: 0 },
        { prompt: "Ile wynosi 6²?", options: ["12", "36", "30", "42"], answer: 1 },
        { prompt: "Ile wynosi √25 + √9?", options: ["8", "16", "7", "34"], answer: 0 },
        { prompt: "Ile wynosi 7²?", options: ["14", "42", "49", "56"], answer: 2 },
        { prompt: "Ile wynosi √64?", options: ["6", "8", "7", "9"], answer: 1 },
        { prompt: "Ile wynosi 1³?", options: ["3", "1", "0", "2"], answer: 1 },
        { prompt: "Ile wynosi 8²?", options: ["16", "64", "56", "72"], answer: 1 },
        { prompt: "Ile wynosi √36 - √4?", options: ["4", "2", "6", "8"], answer: 0 },
        { prompt: "Ile wynosi 0²?", options: ["1", "0", "2", "brak"], answer: 1 },
        { prompt: "Ile wynosi 9²?", options: ["18", "81", "72", "90"], answer: 1 },
        { prompt: "Ile wynosi √144?", options: ["11", "12", "14", "16"], answer: 1 },
        { prompt: "Ile wynosi 3³?", options: ["9", "27", "18", "81"], answer: 1 },
        { prompt: "Ile wynosi √1?", options: ["0", "1", "2", "-1"], answer: 1 },
        { prompt: "Ile wynosi 2⁵?", options: ["25", "64", "32", "16"], answer: 2 },
        { prompt: "Ile wynosi 10³?", options: ["30", "100", "1000", "10000"], answer: 2 },
        { prompt: "Ile wynosi √(25 · 4)?", options: ["10", "20", "50", "15"], answer: 0 }
      ],
      equations: [
        { prompt: "Rozwiąż równanie: x + 5 = 12", options: ["x = 7", "x = 8", "x = 17", "x = 6"], answer: 0 },
        { prompt: "Rozwiąż równanie: 2x = 10", options: ["x = 8", "x = 5", "x = 20", "x = 4"], answer: 1 },
        { prompt: "Rozwiąż równanie: x - 4 = 10", options: ["x = 6", "x = 14", "x = 12", "x = 15"], answer: 1 },
        { prompt: "Rozwiąż równanie: 3x = 21", options: ["x = 6", "x = 8", "x = 7", "x = 9"], answer: 2 },
        { prompt: "Rozwiąż równanie: 2x + 4 = 14", options: ["x = 5", "x = 6", "x = 4", "x = 7"], answer: 0 },
        { prompt: "Rozwiąż równanie: 5x = 35", options: ["x = 6", "x = 7", "x = 8", "x = 5"], answer: 1 },
        { prompt: "Rozwiąż równanie: x : 2 = 8", options: ["x = 4", "x = 16", "x = 10", "x = 12"], answer: 1 },
        { prompt: "Rozwiąż równanie: 4x - 5 = 15", options: ["x = 5", "x = 4", "x = 6", "x = 7"], answer: 0 },
        { prompt: "Rozwiąż równanie: 10 - x = 3", options: ["x = 13", "x = 7", "x = 6", "x = -7"], answer: 1 },
        { prompt: "Rozwiąż równanie: 6x = 48", options: ["x = 7", "x = 8", "x = 9", "x = 6"], answer: 1 },
        { prompt: "Rozwiąż równanie: 3x + 9 = 24", options: ["x = 5", "x = 4", "x = 6", "x = 7"], answer: 0 },
        { prompt: "Rozwiąż równanie: 2x + 10 = 20", options: ["x = 5", "x = 10", "x = 6", "x = 4"], answer: 0 },
        { prompt: "Rozwiąż równanie: 7x = 49", options: ["x = 6", "x = 8", "x = 7", "x = 9"], answer: 2 },
        { prompt: "Rozwiąż równanie: x + 15 = 40", options: ["x = 25", "x = 30", "x = 20", "x = 35"], answer: 0 },
        { prompt: "Rozwiąż równanie: 5x - 10 = 15", options: ["x = 3", "x = 5", "x = 6", "x = 4"], answer: 1 },
        { prompt: "Rozwiąż równanie: 8x = 64", options: ["x = 7", "x = 9", "x = 8", "x = 6"], answer: 2 },
        { prompt: "Rozwiąż równanie: x : 4 = 5", options: ["x = 20", "x = 1", "x = 9", "x = 15"], answer: 0 },
        { prompt: "Rozwiąż równanie: 2x - 8 = 12", options: ["x = 8", "x = 10", "x = 9", "x = 11"], answer: 1 },
        { prompt: "Rozwiąż równanie: 9x = 81", options: ["x = 8", "x = 7", "x = 9", "x = 6"], answer: 2 },
        { prompt: "Rozwiąż równanie: 3x + 1 = 16", options: ["x = 5", "x = 6", "x = 4", "x = 7"], answer: 0 },
        { prompt: "Rozwiąż równanie: 4x + 8 = 24", options: ["x = 3", "x = 4", "x = 5", "x = 6"], answer: 1 },
        { prompt: "Rozwiąż równanie: 5x + 5 = 50", options: ["x = 9", "x = 10", "x = 8", "x = 11"], answer: 0 },
        { prompt: "Rozwiąż równanie: x - 12 = 18", options: ["x = 6", "x = 30", "x = 28", "x = 24"], answer: 1 },
        { prompt: "Rozwiąż równanie: 10x = 120", options: ["x = 10", "x = 11", "x = 12", "x = 14"], answer: 2 },
        { prompt: "Rozwiąż równanie: 2x + 7 = 19", options: ["x = 5", "x = 6", "x = 7", "x = 8"], answer: 1 }
      ],
      linear_func: [
        { 
          prompt: "Wskaż postać kierunkową prostej:", 
          options: ["y = ax + b", "y = ax² + b", "y = a / x", "x = y + b"], 
          answer: 0 
        },
        { 
          prompt: "Co oznacza x oraz y w zapisie punktu (x, y) na układzie współrzędnych?", 
          options: ["x to oś pionowa, y to pozioma", "x to argument (oś OX), y to wartość (oś OY)", "oba oznaczają to samo", "x to zawsze 0"], 
          answer: 1 
        },
        { 
          prompt: "Kiedy prosta o równaniu y = ax + b jest rosnąca?", 
          options: ["gdy a > 0", "gdy a < 0", "gdy a = 0", "gdy b > 0"], 
          answer: 0 
        },
        { 
          prompt: "Kiedy prosta o równaniu y = ax + b jest malejąca?", 
          options: ["gdy a > 0", "gdy a = 0", "gdy a < 0", "gdy b < 0"], 
          answer: 2 
        },
        { 
          prompt: "Kiedy prosta na układzie współrzędnych jest pozioma (stała)?", 
          options: ["gdy a = 0", "gdy a > 0", "gdy b = 0", "gdy a = 1"], 
          answer: 0 
        },
        { 
          prompt: "W jakim punkcie prosta y = 3x + 4 przecina pionową oś OY?", 
          options: ["(4, 0)", "(0, 4)", "(3, 4)", "(0, 3)"], 
          answer: 1 
        },
        { 
          prompt: "W jakim punkcie prosta y = -2x - 5 przecina pionową oś OY?", 
          options: ["(0, -5)", "(-5, 0)", "(0, 2)", "(-2, -5)"], 
          answer: 0 
        },
        { 
          prompt: "W jakim punkcie prosta y = 2x - 6 przecina poziomą oś OX (miejsce zerowe)?", 
          options: ["(0, -6)", "(3, 0)", "(-3, 0)", "(6, 0)"], 
          answer: 1 
        },
        { 
          prompt: "Oblicz miejsce zerowe prostej f(x) = 4x - 12 (wstaw f(x)=0):", 
          options: ["x = 3", "x = -3", "x = 4", "x = 12"], 
          answer: 0 
        },
        { 
          prompt: "Czy punkt A = (2, 7) leży na prostej y = 3x + 1?", 
          options: ["Tak, bo 3 · 2 + 1 = 7", "Nie, bo 3 · 2 + 1 = 6", "Nie leży", "Tylko gdy x = 0"], 
          answer: 0 
        },
        { 
          prompt: "Czy punkt B = (1, 5) leży na prostej y = 2x + 1?", 
          options: ["Tak, leży", "Nie, bo 2 · 1 + 1 = 3 (a nie 5)", "Nie da się określić", "Leży w środku układu"], 
          answer: 1 
        },
        { 
          prompt: "Jaka jest wartość y dla x = 4 w prostej y = -x + 6?", 
          options: ["y = 10", "y = 2", "y = -2", "y = 4"], 
          answer: 1 
        },
        { 
          prompt: "Dla jakiego argumentu x prosta y = 2x + 4 ma wartość y = 10?", 
          options: ["x = 3", "x = 2", "x = 7", "x = 5"], 
          answer: 0 
        },
        { 
          prompt: "Prosta przechodzi przez początek układu współrzędnych (0, 0). Ile wynosi wyraz wolny b?", 
          options: ["b = 1", "b = 0", "b = -1", "b = 2"], 
          answer: 1 
        },
        { 
          prompt: "Wskaż równanie prostej poziomej równoległej do osi OX:", 
          options: ["y = 4", "x = 4", "y = 4x", "y = x + 4"], 
          answer: 0 
        },
        { 
          prompt: "Która z poniższych prostych jest rosnąca?", 
          options: ["y = -5x + 2", "y = 4x - 10", "y = -x + 1", "y = -0.5x"], 
          answer: 1 
        },
        { 
          prompt: "Która z poniższych prostych jest malejąca?", 
          options: ["y = 3x + 1", "y = 0.5x - 4", "y = -2x + 8", "y = x"], 
          answer: 2 
        },
        { 
          prompt: "Kiedy dwie proste na układzie współrzędnych są do siebie RÓWNOLEGŁE?", 
          options: ["gdy mają takie samo a (a₁ = a₂)", "gdy mają takie samo b", "gdy a₁ · a₂ = -1", "gdy przecinają się w (0,0)"], 
          answer: 0 
        },
        { 
          prompt: "Wskaż prostą równoległą do prostej y = 5x + 3:", 
          options: ["y = -5x + 3", "y = 5x - 8", "y = 0.2x + 1", "y = -0.2x"], 
          answer: 1 
        },
        { 
          prompt: "Kiedy dwie proste na układzie współrzędnych są PROSTOPADŁE?", 
          options: ["gdy a₁ = a₂", "gdy a₁ · a₂ = -1", "gdy b₁ = b₂", "gdy obie są rosnące"], 
          answer: 1 
        },
        { 
          prompt: "Wskaż prostą prostopadłą do prostej y = 2x + 1:", 
          options: ["y = 2x - 4", "y = -2x + 1", "y = -0.5x + 3", "y = 0.5x - 2"], 
          answer: 2 
        },
        { 
          prompt: "Wskaż prostą prostopadłą do prostej y = -3x + 2:", 
          options: ["y = (1/3)x - 5", "y = 3x + 2", "y = -3x", "y = -(1/3)x + 1"], 
          answer: 0 
        },
        { 
          prompt: "Punkt przecięcia wykresu y = ax + b z osią OY ma pierwszą współrzędną x równą zawsze:", 
          options: ["0", "1", "b", "a"], 
          answer: 0 
        },
        { 
          prompt: "Punkt przecięcia wykresu z osią OX (miejsce zerowe) ma współrzędną y równą zawsze:", 
          options: ["0", "1", "-b", "a"], 
          answer: 0 
        },
        { 
          prompt: "Dana jest prosta y = x. Jak nachylona jest do osi układu?", 
          options: ["jest pozioma", "jest pionowa", "dzieli I i III ćwiartkę dokładnie na pół pod kątem 45°", "jest malejąca"], 
          answer: 2 
        }
      ]
    }
  }
};