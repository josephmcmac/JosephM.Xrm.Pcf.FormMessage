:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Run in Visual Studio Command Prompt to Build Solution ::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

call echo "Building NPM Modules"
call npm run build -- --buildMode production
call timeout 1
call echo "Packaging Solution"
call msbuild "Solution/JosephMcGregorPcfFormMessage.cdsproj" /t:build /restore