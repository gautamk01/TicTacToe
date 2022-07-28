function WinnerFinder(Checkarray) {
  const array = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < array.length; i++) {
    const [a, b, c] = array[i];
    if (
      String(Checkarray[a]) === "X" &&
      String(Checkarray[b]) === "X" &&
      String(Checkarray[c]) === "X"
    ) {
      return Checkarray[a];
    } else if (
      String(Checkarray[a]) === "O" &&
      String(Checkarray[b]) === "O" &&
      String(Checkarray[c]) === "O"
    ) {
      return Checkarray[a];
    }
  }
}

export default WinnerFinder;
