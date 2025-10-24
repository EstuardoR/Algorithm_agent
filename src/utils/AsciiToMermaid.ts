export function asciiToMermaid(ascii: string): string {
    return ascii
        // Flechas
        .replace(/\|\s*V/g, "-->")
        .replace(/->/g, "-->")
        .replace(/-->/g, "-->")
        // Nodos de inicio/fin
        .replace(/\(INICIO\)/gi, "Start")
        .replace(/\(FIN\)/gi, "End")
        // Sanitizar caracteres
        .replace(/[\[\]\(\)=;:]/g, "_")   // [ ] ( ) = ; :
        .replace(/\]\[/g, "_")            // combinaciones de ][
        .replace(/["',]/g, "")            // comillas y comas
        .replace(/\s+/g, "_")             // espacios → _
        .replace(/[^a-zA-Z0-9_>-]/g, "_") // cualquier otro carácter
        .replace(/_+/g, "_")              // múltiples _ → 1
        // Trim líneas
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join("\n");
}