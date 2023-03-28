export function dirReduc(arr: string[]): string[] {
  const oppDirs: Record<string, string> = {
    N: "S",
    E: "W",
  };

  const reduc: string[] = [];
  for (const dir of arr) {
    const prevDir = reduc[reduc.length - 1];
    if (
      prevDir &&
      (oppDirs[dir.charAt(0)] === prevDir.charAt(0) ||
        oppDirs[prevDir.charAt(0)] === dir.charAt(0))
    ) {
      reduc.pop();
    } else {
      reduc.push(dir);
    }
  }
  return reduc;
}