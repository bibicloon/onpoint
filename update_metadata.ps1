$dirs = Get-ChildItem -Path "c:\Users\User\Desktop\onpointkoerier.nl\src\app\werkgebied" -Directory
foreach ($dir in $dirs) {
    $pageFile = Join-Path $dir.FullName "page.tsx"
    if (Test-Path $pageFile) {
        $cityNameRaw = $dir.Name
        # Format the city name
        $cityName = (Get-Culture).TextInfo.ToTitleCase($cityNameRaw.Replace("-", " "))
        
        $newMetadata = "export const metadata: Metadata = { `n" +
        "  title: 'Spoedkoerier $cityName | Direct Onderweg | OnPoint Koeriers', `n" +
        "  description: 'Uw betrouwbare koerier in $cityName. Wij navigeren moeiteloos door de stad voor al uw spoedzendingen. Direct beschikbaar.', `n" +
        "};"

        $content = Get-Content $pageFile -Raw
        
        # We need to replace the existing metadata block.
        # It looks like:
        # export const metadata: Metadata = { 
        #   title: '...', 
        #   description: '...', 
        # };
        
        $content = $content -replace '(?s)export const metadata: Metadata = \{.*?\};', $newMetadata
        
        Set-Content -Path $pageFile -Value $content -NoNewline
    }
}
