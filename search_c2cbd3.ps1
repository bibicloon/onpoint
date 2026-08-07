$files = Get-ChildItem -Path "c:\Users\User\Desktop\onpointkoerier.nl\src\app" -Filter "page.tsx" -Recurse
foreach ($file in $files) {
    Select-String -Path $file.FullName -Pattern '#C2CBD3' -Context 5,5
}
