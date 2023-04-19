export class Challenge {
  static solution(number: number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return number < 0 ? 0 : sum;
  }
}

export default function isSquare(n: number): boolean {
  return Math.sqrt(n) === Math.floor(Math.sqrt(n));
}

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((x) => !b.includes(x));
}

export const likes = (a: string[], maxUsers: number = 4): string => {
  const stringArr: string[] = ["likes this", "like this", "no one likes this"];
  switch (a.length) {
    case 0:
      return stringArr[2];
    case 1:
    case 2:
      return [
        a.join(" and "),
        a.length == 1 ? stringArr[0] : stringArr[1],
      ].join(" ");
    case 3:
      return [
        a.slice(0, maxUsers / 2).join(", ") + " and " + a[2],
        stringArr[1],
      ].join(" ");
    default:
      return (
        a.slice(0, maxUsers / 2).join(", ") +
        ` and ${a.length - maxUsers / 2} others ` +
        stringArr[1]
      );
  }
};

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
  n,
}: {
  n: number;
}): string | undefined | any => {
  let factors: string[] = [];
  let d: number = 2;
  while (n > 1) {
    if (n % d === 0) {
      let p = 0;
      while (n % d === 0) {
        p++;
        n = n / d;
      }
      factors.push(`(${d}${p > 1 ? `**${p}` : ""})`);
    }
    d++;
  }
  return factors.join("");
};

export const decompose = (n: number): null | number[] => {
  const recursInt = (n: number, i: number): number[] | null => {
    if (n === 0) return [];
    for (let k = i; k >= 1; k--) {
      if (n - k * k >= 0) {
        const arr = recursInt(n - k * k, k - 1);
        if (arr !== null) return [...arr, k];
      }
    }
    return null;
  };
  return recursInt(n * n, n - 1);
};

export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) {
    return null;
  }
  const arr: number[] = [];
  while (l > 0 && w > 0) {
    if (l > w) {
      arr.push(w);
      l -= w;
    } else {
      arr.push(l);
      w -= l;
    }
  }
  return arr;
};
