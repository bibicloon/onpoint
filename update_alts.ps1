$files = Get-ChildItem -Path "c:\Users\User\Desktop\onpointkoerier.nl\src\app" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    if ($file.FullName -match 'src\\app\\werkgebied\\(.*)\\page.tsx$') {
        $cityRaw = $matches[1]
        $city = (Get-Culture).TextInfo.ToTitleCase($cityRaw.Replace("-", " "))
        
        $newAlt = "OnPoint Koeriers voertuig gereed voor direct spoedtransport in $city"
        $content = $content -replace 'alt="Spoedtransport[^"]*"', "alt=`"$newAlt`""
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
