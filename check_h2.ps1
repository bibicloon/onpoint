$files = Get-ChildItem -Path "c:\Users\User\Desktop\onpointkoerier.nl\src\app" -Filter "page.tsx" -Recurse
foreach ($file in $files) {
    Select-String -Path $file.FullName -Pattern '<h2 style=\{\{ color: ''#313851'', marginBottom: ''1.5rem'''
}
