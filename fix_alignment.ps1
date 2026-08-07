$files = Get-ChildItem -Path "c:\Users\User\Desktop\onpointkoerier.nl\src\app" -Filter "page.tsx" -Recurse | Where-Object { $_.FullName -notmatch "src\\app\\page\.tsx$" }

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace '<div className=\{styles\.heroContent\} style=\{\{ alignItems: ''center'', textAlign: ''center'' \}\}>', '<div className={styles.heroContent} style={{ display: ''flex'', flexDirection: ''column'', alignItems: ''center'', justifyContent: ''center'', textAlign: ''center'', margin: ''0 auto'' }}>'
    $content = $content -replace '<div className=\{styles\.heroContent\} style=\{\{ alignItems: ''center'', textAlign: ''center'', margin: ''0 auto'' \}\}>', '<div className={styles.heroContent} style={{ display: ''flex'', flexDirection: ''column'', alignItems: ''center'', justifyContent: ''center'', textAlign: ''center'', margin: ''0 auto'' }}>'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
