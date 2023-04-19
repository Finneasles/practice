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

export function createPhoneNumber(numbers: number[]): string {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6, 10).join("")}`;
}

export const primeFactors = ({
  n
}: {
  n: number;
}): string | undefined | any => {
  let factors: string[] = [];
  let d : number = 2;
  while (n > 1) {
    if (n % d === 0) {
      let p = 0;
      while (n % d === 0) {
        p++;
        n = n / d;
      }
      factors.push(`(${d}${p > 1 ? `**${p}` : ''})`);
    }
    d++;
  }
  return factors.join('');
};

console.log(primeFactors({ n: 17*17*93*677 }));
