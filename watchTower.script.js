servers=["foodnstuff","iron-gym","sigma-cosmetics","nectar-net","harakiri-sushi","phantasy","silver-helix"];
host=getHostname();
i=0;
serverRam=(getServerRam(host)[0]-getServerRam(host)[1])/servers.length;
while(true)
{
    if (i===servers.length){i=0}
    if (!(isRunning("weaker.script",host,servers[i])
    ||isRunning("grower.script",host,servers[i])
    ||isRunning("hacker.script",host,servers[i])))
    {
        if (getServerSecurityLevel(servers[i]) > getServerMinSecurityLevel(servers[i])*5/2)
        {
            run("weaker.script", Math.floor(serverRam/getScriptRam("weaker.script", host)), servers[i]);
        }
        else if (getServerMoneyAvailable(servers[i])<getServerMaxMoney(servers[i])*0.7)
        {
            run("grower.script", Math.floor(serverRam/getScriptRam("grower.script", host)), servers[i]);
        
        }
        else
        {
            run("hacker.script", Math.floor(serverRam/getScriptRam("hacker.script", host)), servers[i]);
        
        }
    }
    i++;
}