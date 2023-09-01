import { CliConnexion } from "@cameleo/cli";
import { Kernel } from "@cameleo/core";
import { CliController } from "./controllers/CliController";

async function main() {
    const kernel = await Kernel.create({
        controllers: [CliController]
    });
    await kernel.open(new CliConnexion())
}

main();