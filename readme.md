building a nuget package with templates
dotnet pack --no-build --output nupkgs

installing template as a nuget package locally
dotnet new -i .\react-template-core\nupkgs\ComparisonTech.Utility.Templates.1.0.0.nupkg

uninstall template
dotnet new -u react-mvc-ts

clean up local templates installed for test purposes during development
dotnet new --debug:reinit