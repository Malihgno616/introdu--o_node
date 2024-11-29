const dns = require("node:dns");

async function bootstrap() {
  const searchedUrl = "google.com";

  console.time("pesquisando url por DNS padrão");
  const address = await dns.promises.resolve4(searchedUrl);

  console.timeEnd("pesquisando url por DNS padrão");
  console.log(address);
  
  const nameServers = await dns.promises.resolveNs(searchedUrl);
  console.log(nameServers);
  
  const ipNs = await dns.promises.resolve4(nameServers[1]);

  const resolver = new dns.Resolver();
  resolver.setServers(ipNs);

  console.time("pesquisando url por DNS específico");
  const addressesWithResolver = await resolver.resolve4(
    searchedUrl,
    (error, address) => {
      if (error) {
        console.error("Não foi possível encontrar o ipv4");
      }
      console.timeEnd("pesquisando url por DNS específico");
      console.log(address);
    }
  );
}

bootstrap();
