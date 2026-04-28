import { Callout, Card, CardBody, CardHeader, Divider, Grid, H1, H2, Link, Stack, Stat, Table, Text } from 'cursor/canvas';

const topRows = [
  [
    '1',
    'Lenovo ThinkPad T14 Gen 1 AMD',
    '1299-1599 zl',
    'Ryzen 5 PRO 4650U',
    '16 GB',
    '256-512 GB SSD',
    '14" FHD IPS',
    'ok. 1,46-1,55 kg',
    'realnie 3-7 h',
    <Link href="https://www.otokomputery.pl/pl/p/Laptop-Lenovo-ThinkPad-T14-Gen.1-AMD-RYZEN-5-PRO-4650U-16GB-512GB-SSD-14-FHD-Klasa-B/6974">OTOKomputery</Link>,
  ],
  [
    '2',
    'Dell Latitude 5420',
    '1299-1599 zl',
    'Core i5-1135G7 / i5-1145G7',
    '16 GB',
    '512 GB SSD',
    '14" FHD',
    'ok. 1,37 kg',
    'realnie 2-5 h, lepiej 5-8 h',
    <Link href="https://www.otokomputery.pl/pl/p/Laptop-Dell-Latitude-5420-Intel-Core-i5-1135G7-16GB-RAM-512GB-SSD-14-FHD-Klasa-B/5980">OTOKomputery</Link>,
  ],
  [
    '3',
    'Lenovo ThinkPad T490',
    '999-1319 zl',
    'Core i5-8365U',
    '16 GB',
    '512 GB SSD',
    '14" FHD IPS',
    'ok. 1,46-1,6 kg',
    'realnie 3-7 h',
    <Link href="https://www.sferis.pl/lenovo-thinkpad-t490-i5-8365u-16gb-512gb-ssd-14-fhd-us-qwerty-win11pro-zasilacz-uzywany-i364651">Sferis</Link>,
  ],
  [
    '4',
    'HP EliteBook 840 G7',
    '1148-1450 zl',
    'Core i5-10310U',
    '16 GB',
    '512 GB SSD',
    '14" FHD IPS',
    'ok. 1,33-1,46 kg',
    'realnie 3-6 h',
    <Link href="https://www.netman.pl/produkt/hp-elitebook-840-g7-i5-10310u-16gb-512gb-ssd-dotyk-fhd-ips-win11-pro-a/">Netman</Link>,
  ],
  [
    '5',
    'Microsoft Surface Laptop Go 3',
    'ok. 1700-2000 zl',
    'Core i5-1235U',
    '16 GB',
    '256 GB SSD',
    '12,4" dotyk 1536x1024',
    'ok. 1,13 kg',
    'realnie ok. 8-10 h, zalezy od zuzycia',
    <Link href="https://allegro.pl/oferta/microsoft-surface-laptop-go-3-i5-1235u-16gb-256gb-windows-11-platynowy-18254236962">Allegro</Link>,
  ],
];

const allRows = [
  ['ThinkPad T14 Gen 1 AMD', '8/10', 'Najlepsza wydajnosc za cene, szczegolnie Ryzen 5 PRO 4650U.', 'Bateria i jakosc ekranu 250 nitow w uzywkach.'],
  ['Dell Latitude 5420', '8/10', 'Nowszy Intel 11 gen, Wi-Fi 6, dobra mobilnosc i porty.', 'Unikac 8 GB RAM i ofert z deklaracja baterii tylko 1 h.'],
  ['ThinkPad T490', '8/10', 'Tani, solidny, 16/512 czesto ok. 1000-1300 zl.', 'Starsza platforma 8 gen, bateria loteria.'],
  ['HP EliteBook 840 G7', '8/10', 'Lekki, biznesowy, dobra obudowa, czesto 16/512 w dobrej cenie.', 'Matryce 250 nitow sa tylko przecietne.'],
  ['Microsoft Surface Laptop Go 3', '7/10', 'Bardzo lekki, ladny, szybki i5-1235U, dobra bateria w zdrowej sztuce.', 'Maly ekran ponizej FHD, tylko 256 GB SSD, slaba naprawialnosc.'],
  ['Lenovo V15 G4', '8/10', 'Nowy lub prawie nowy, 16/512 w budzecie, duzy ekran.', 'Budzetowa obudowa, czesto TN, RAM zwykle wlutowany.'],
  ['Dell Latitude 5400', '8/10', 'Bardzo tani i sensowny przy 16/512 za 900-1200 zl.', 'Nie warto doplacac powyzej 1400 zl.'],
  ['HP EliteBook 840 G6', '8/10', 'Dobry tani biznesowy laptop 14", czesto 900-1300 zl.', 'Starszy rocznik, stan baterii kluczowy.'],
  ['ThinkPad X1 Carbon Gen 6/7', '8/10', 'Najlepsza mobilnosc i premium wykonanie.', 'RAM wlutowany; brac tylko 16 GB, uwazac na baterie.'],
  ['ThinkPad T480', '8/10', 'Najtanszy sensowny ThinkPad, latwa rozbudowa, dobra klawiatura.', 'Wiek, bateria i ekran moga byc najslabszym punktem.'],
  ['Acer Aspire 3 15', '7/10', 'Nowy, dobra bateria, czasem 16/512 w dobrej cenie.', 'Plastik, RAM czesto wlutowany, uwazac na HD/TN i brak systemu.'],
];

export default function LaptopRanking() {
  return (
    <Stack gap={18}>
      <H1>Laptopy 1000-2000 zl: ranking wartosci</H1>
      <Text>
        Priorytet: plynne WWW, YouTube/Netflix, szybki start systemu i komfort kilku lat uzywania. Najlepiej celowac w 16 GB RAM, SSD 512 GB i ekran FHD IPS.
      </Text>

      <Grid columns={4} gap={12}>
        <Stat value="11" label="sprawdzonych kandydatow" />
        <Stat value="5" label="najlepszych wyborow" tone="success" />
        <Stat value="16 GB" label="rekomendowany RAM" />
        <Stat value="512 GB" label="wygodny SSD" />
      </Grid>

      <Callout tone="success" title="Najkrotsza rekomendacja">
        Jesli akceptujesz laptop poleasingowy, najpierw szukalbym ThinkPada T14 Gen 1 AMD albo Della Latitude 5420. Surface Laptop Go 3 jest ciekawy, jesli priorytetem sa mala waga, wyglad i bateria, ale jako laptop do filmow i wygodnego WWW przegrywa ekranem 12,4" i dyskiem 256 GB.
      </Callout>

      <H2>TOP 5</H2>
      <Table
        headers={['#', 'Model', 'Cena', 'Procesor', 'RAM', 'Dysk', 'Ekran', 'Waga', 'Bateria', 'Przyklad']}
        rows={topRows}
        rowTone={['success', 'success', undefined, undefined, undefined]}
        striped
      />

      <Divider />

      <Grid columns="1.2fr 1fr" gap={14}>
        <Card>
          <CardHeader>Dlaczego poleasingowe biznesowe wygrywaja</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text>W tej cenie uzywany ThinkPad, Latitude albo EliteBook zwykle daje lepsza klawiature, obudowe, porty i serwisowalnosc niz nowy laptop budzetowy.</Text>
              <Text>Najwieksze ryzyko to bateria, dlatego warto kupowac od sklepu z gwarancja i pytac o realny czas pracy albo raport zuzycia.</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Minimalna konfiguracja</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text>Procesor: Intel 8 gen i5/i7 albo Ryzen 5 4500U/4650U i nowszy.</Text>
              <Text>RAM: 16 GB. 8 GB tylko jesli cena jest bardzo niska i RAM mozna rozbudowac.</Text>
              <Text>Ekran: FHD 1920x1080, najlepiej IPS. Unikac 1366x768 i TN.</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <H2>Pelne porownanie 11 kandydatow</H2>
      <Table
        headers={['Model', 'Ocena', 'Najwiekszy plus', 'Najwieksze ryzyko']}
        rows={allRows}
        rowTone={['success', 'success', undefined, undefined, 'info', undefined, undefined, undefined, undefined, undefined, 'warning']}
        striped
      />

      <H2>Przed kliknieciem Kup teraz</H2>
      <Text>Sprawdz: 16 GB RAM, SSD 512 GB, FHD IPS, gwarancje minimum 12 miesiecy, deklarowany czas pracy baterii, uklad klawiatury, klase wizualna A/A-/B i czy oferta zawiera Windows.</Text>
      <Text>Przy Surface dodatkowo sprawdz stan ekranu dotykowego, portow, zawiasu, baterii oraz czy 256 GB SSD wystarczy, bo rozbudowa i naprawy sa mniej wygodne niz w ThinkPadzie, Latitude albo EliteBooku.</Text>
      <Text tone="secondary" size="small">Ceny i linki zebrane z aktualnych wynikow wyszukiwania w Polsce; oferty Allegro i sklepow poleasingowych szybko sie zmieniaja.</Text>
    </Stack>
  );
}
