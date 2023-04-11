const N = 20;
const M = 50;
const kaczuszki = [
  [3, 2],
  [5, 4],
  [7, 6],
  [2, 1],
  [8, 5],
  [4, 3],
  [6, 7],
  [9, 9],
  [1, 2],
  [5, 4],
  [7, 6],
  [8, 8],
  [3, 3],
  [4, 5],
  [6, 7],
  [2, 1],
  [1, 2],
  [5, 4],
  [8, 6],
  [9, 8]
];
const dp = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    if (kaczuszki[i - 1][1] <= j) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i - 1][j - kaczuszki[i - 1][1]] + kaczuszki[i - 1][0]
      );
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

const maxSumaWysokosci = dp[N][M];

console.log(maxSumaWysokosci);