import {
  Callout,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Link,
  Stack,
  Stat,
  Table,
  Text,
} from "cursor/canvas";

export default function LaptopBudzetPodsumowanie() {
  return (
    <Stack gap={20}>
      <H1>Laptopy 1000–2000 PLN — podsumowanie</H1>
      <Text tone="secondary">
        Przeglądanie sieci i filmy: priorytet SSD (najlepiej NVMe), 8 GB RAM
        minimum, bezpieczniej 16 GB, ekran FHD lub lepszy (IPS mile widziany).
        Poniżej zestawienie z wyszukiwania (kwiecień 2026); ceny na aukcjach i
        w sklepach mogą się zmieniać.
      </Text>

      <Grid columns={3} gap={16}>
        <Stat value="1000–2000" label="Budżet (PLN)" />
        <Stat value="5 + Surface" label="Modele w zestawieniu" />
        <Stat value="WWW + wideo" label="Scenariusz" />
      </Grid>

      <Callout tone="warning" title="Uwaga przed zakupem">
        Potwierdź aktualną cenę na stronie oferty. Na Allegro Lokalnie cena
        czasem nie jest widoczna w skrócie — wejdź w ogłoszenie. Używany
        sprzęt: sprawdź stan baterii, brak blokady BIOS i konta Microsoft.
      </Callout>

      <Divider />

      <H2>Top 5 — stosunek wartości do ceny</H2>
      <Table
        striped
        headers={[
          "Model",
          "Cena",
          "Dysk",
          "RAM",
          "CPU",
          "Ekran",
          "Waga / bateria",
          "Uwagi",
        ]}
        columnAlign={["left", "right", "left", "left", "left", "left", "left", "left"]}
        rows={[
          [
            "HP 255 G10",
            "~1000 zł",
            "SSD 512 GB",
            "16 GB",
            "Ryzen 5 7530U",
            '15,6" FHD',
            "wg ogłoszenia",
            "Bardzo silny wybór pod płynność i multitasking.",
          ],
          [
            "HP 255 G8",
            "~1000 zł",
            "SSD NVMe 512 GB",
            "16 GB",
            "Ryzen 5 5500U",
            '15,6" FHD',
            "wg ogłoszenia",
            "Starszy CPU niż G10, nadal bardzo dobry do internetu i wideo.",
          ],
          [
            "ASUS Vivobook 15",
            "~1960 zł",
            "SSD 512 GB",
            "16 GB",
            "Core i3-1315U",
            "15–16\", IPS",
            "w karcie x-kom",
            "Nowy z gwarancją sklepu — sensowny kompromis w górnej części budżetu.",
          ],
          [
            "Lenovo IdeaPad 3 15IAU7",
            "~1700 zł",
            "SSD 512 GB",
            "8 GB",
            "Core i3-1215U",
            '15,6" IPS',
            "w sklepie",
            "IPS i 512 GB; 8 GB to mniejszy zapas niż 16 GB u HP.",
          ],
          [
            "Dell Inspiron 3520",
            "~1900 zł",
            "SSD 512 GB",
            "8 GB",
            "Core i5-1235U",
            '15,6" FHD 120 Hz',
            "wg ogłoszenia",
            "Mocny CPU i płynniejsze przewijanie; rozważ rozbudowę RAM jeśli możliwa.",
          ],
        ]}
        rowTone={["success", "success", undefined, undefined, undefined]}
      />

      <H3>Microsoft Surface Laptop Go 3 (dopisek)</H3>
      <Text>
        Konfiguracja z przykładowej aukcji Allegro: i5-1235U, 16 GB RAM, 256 GB
        SSD, Windows 11. Ekran ok. 12,4&quot; 1536×1024, proporcje 3:2, dotyk
        PixelSense. Waga ok. 1,13 kg (dane producenta). Bateria: do ok. 15 h
        (deklaracja Microsoft; realnie krócej przy wideo i Wi‑Fi).
      </Text>
      <Table
        headers={["Względem top 5", "Surface", "Typowy 15\" w budżecie"]}
        rows={[
          [
            "Mobilność",
            "Lżejszy, mniejszy format",
            "Cięższy, większy obraz",
          ],
          ["Dysk", "256 GB", "Często 512 GB"],
          ["Ekran", "Mniejszy, dotyk", "Większy, często bez dotyku"],
          [
            "Wartość / zł",
            "Zależy od ceny aukcji; nowe bywają ~4000 zł w detalu",
            "HP ~1000 zł z 16 GB często nie do pobicia",
          ],
        ]}
        striped
      />
      <Text size="small" tone="tertiary">
        Surface ma sens przy priorytecie lekkości i dotyku; pod samo „wartość
        za złotówkę” i duży obraz wygrywają często 15&quot; z poprzedniej tabeli.
      </Text>

      <Divider />

      <H2>Przykładowe linki do ofert i wyszukiwarek</H2>
      <Stack gap={8}>
        <Link href="https://allegrolokalnie.pl/oferta/laptop-hp-255-g10-156-ryzen-5-16512gb-windows-11">
          Allegro Lokalnie — HP 255 G10
        </Link>
        <Link href="https://allegrolokalnie.pl/oferta/hp-255-g8-ryzen-5-5500u-16-gb-ram-512-gb-ssd-nvme">
          Allegro Lokalnie — HP 255 G8
        </Link>
        <Link href="https://www.x-kom.pl/p/1354538-laptop-15-16-asus-vivobook-15-i3-1315u-16gb-512-win11.html">
          x-kom — ASUS Vivobook 15
        </Link>
        <Link href="https://www.mediaexpert.pl/komputery-i-tablety/laptopy-i-ultrabooki/laptopy/laptop-lenovo-ideapad-3-15iau7-15-6-ips-i3-1215u-8gb-ram-512gb-ssd-windows-11-home">
          Media Expert — Lenovo IdeaPad 3 15IAU7
        </Link>
        <Link href="https://www.olx.pl/d/oferta/dell-inspiron-3520-15-6-i5-1235u-8gb-ram-512gb-dysk-ssd-CID99-ID13TWbk.html">
          OLX — Dell Inspiron 3520
        </Link>
        <Link href="https://allegro.pl/oferta/microsoft-surface-laptop-go-3-i5-1235u-16gb-256gb-windows-11-platynowy-18254236962">
          Allegro — Surface Laptop Go 3 (przykład aukcji)
        </Link>
        <Link href="https://allegro.pl/listing?string=laptop+ssd+8gb">
          Allegro — wyszukiwanie (dopasuj filtr ceny 1000–2000 zł)
        </Link>
        <Link href="https://www.mediaexpert.pl/outlet/outlet-komputery-i-tablety/outlet-laptopy">
          Media Expert — outlet laptopy
        </Link>
        <Link href="https://www.x-kom.pl/g-2/c/159-laptopy-notebooki-ultrabooki.html?f%5Bprice%5D%5Bto%5D=2000">
          x-kom — laptopy do 2000 zł (filtr)
        </Link>
      </Stack>

      <Text size="small" tone="quaternary">
        Ostatnia aktualizacja zestawienia: kwiecień 2026. Chromebooki z Chrome
        OS i małym eMMC pomijamy tutaj, jeśli potrzebujesz klasycznego Windowsa
        i większej przestrzeni lokalnej.
      </Text>
    </Stack>
  );
}
