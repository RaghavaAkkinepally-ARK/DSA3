// ============================================================
// PaperCheck - DSA Algorithm Tester
// Tests all 23 implemented algorithms using their actual exports.
// Run from backend folder:
//     node testAlgorithms.js
// ============================================================

const { generateRollingHashes } =
  require("./algorithms/hashing/rollingHash");

const { rabinKarpMatch } =
  require("./algorithms/hashing/rabinKarp");

const {
  universalHash,
  createUniversalHashTable
} = require("./algorithms/hashing/universalHashing");

const {
  stringHash,
  buildPerfectHash
} = require("./algorithms/hashing/perfectHashing");

const {
  levenshteinDistance,
  normalizedLevenshteinSimilarity
} = require("./algorithms/dynamicProgramming/levenshtein");

const { wagnerFischer } =
  require("./algorithms/dynamicProgramming/wagnerFischer");

const { damerauLevenshteinDistance } =
  require("./algorithms/dynamicProgramming/damerauLevenshtein");

const { weightedEditDistance } =
  require("./algorithms/dynamicProgramming/weightedEditDistance");

const { needlemanWunsch } =
  require("./algorithms/dynamicProgramming/needlemanWunsch");

const { smithWaterman } =
  require("./algorithms/dynamicProgramming/smithWaterman");

const { fordFulkerson } =
  require("./algorithms/graph/fordFulkerson");

const { edmondsKarp } =
  require("./algorithms/graph/edmondsKarp");

const { dinic } =
  require("./algorithms/graph/dinic");

const { minimumCut } =
  require("./algorithms/graph/minCut");

const { minCostMaxFlow } =
  require("./algorithms/graph/minCostFlow");

const { knapsack } =
  require("./algorithms/optimization/knapsack");

const { subsetSum } =
  require("./algorithms/optimization/subsetSum");

const {
  isVertexCover,
  minimumVertexCover
} = require("./algorithms/optimization/vertexCover");

const { maximumClique } =
  require("./algorithms/optimization/clique");

const { travelingSalesperson } =
  require("./algorithms/optimization/tsp");

const {
  randomizedQuickSort,
  randomizedQuickSortAscending,
  randomizedQuickSortDescending
} = require("./algorithms/randomized/randomizedQuicksort");

const { isPrime } =
  require("./algorithms/randomized/millerRabin");

const { reservoirSample } =
  require("./algorithms/randomized/reservoirSampling");


const algorithms = [
  "Rolling Hash",
  "Rabin-Karp",
  "Universal Hashing",
  "Perfect Hashing",
  "Levenshtein",
  "Wagner-Fischer",
  "Damerau-Levenshtein",
  "Weighted Edit Distance",
  "Needleman-Wunsch",
  "Smith-Waterman",
  "Ford-Fulkerson",
  "Edmonds-Karp",
  "Dinic",
  "Min-Cut",
  "Min-Cost Flow",
  "Knapsack",
  "Subset Sum",
  "Vertex Cover",
  "Clique",
  "TSP",
  "Randomized QuickSort",
  "Miller-Rabin",
  "Reservoir Sampling"
];


function printHeader(title) {
  console.log("\n" + "=".repeat(64));
  console.log(title);
  console.log("=".repeat(64));
}


function printResult(name, output) {
  console.log(`\n[PASS] ${name}`);
  console.log("Output:");
  console.dir(output, { depth: 4 });
}


function runAlgorithm(number) {

  switch (number) {

    // ----------------------------------------------------------
    // HASHING
    // ----------------------------------------------------------

    case 1: {

      const words = [
        "data",
        "structures",
        "and",
        "algorithms",
        "help",
        "detect",
        "similarity"
      ];

      const result = generateRollingHashes(words, 3);

      printResult("Rolling Hash", {
        input: words,
        k: 3,
        windowsGenerated: result.length,
        firstWindow: result[0]
      });

      return true;
    }


    case 2: {

      const source = [
        "data",
        "structures",
        "and",
        "algorithms",
        "help",
        "detect",
        "similarity"
      ];

      const reference = [
        "research",
        "uses",
        "data",
        "structures",
        "and",
        "algorithms",
        "help",
        "detect",
        "similarity"
      ];

      const result = rabinKarpMatch(
        source,
        reference,
        3
      );

      printResult("Rabin-Karp", {
        k: 3,
        matchingKGrams: result.matchingKGrams,
        matches: result.matches
      });

      return true;
    }


    case 3: {

      const values = [
        "paper",
        "research",
        "algorithm",
        "similarity"
      ];

      const hashes = values.map(value => ({
        value,
        hash: universalHash(value)
      }));

      const table =
        createUniversalHashTable(
          values,
          11
        );

      printResult("Universal Hashing", {
        hashes,
        table
      });

      return true;
    }


    case 4: {

      const keys = [
        "paper",
        "research",
        "algorithm"
      ];

      const result =
        buildPerfectHash(keys);

      printResult("Perfect Hashing", {
        keys,
        size: result.size,
        seed: result.seed,
        slots: result.slots,
        exampleIndex:
          stringHash(
            "paper",
            result.seed,
            result.size
          )
      });

      return true;
    }


    // ----------------------------------------------------------
    // DYNAMIC PROGRAMMING
    // ----------------------------------------------------------

    case 5: {

      printResult("Levenshtein", {

        a: "kitten",

        b: "sitting",

        distance:
          levenshteinDistance(
            "kitten",
            "sitting"
          ),

        similarity:
          normalizedLevenshteinSimilarity(
            "kitten",
            "sitting"
          )
      });

      return true;
    }


    case 6: {

      const result =
        wagnerFischer(
          "kitten",
          "sitting"
        );

      printResult("Wagner-Fischer", {

        a: "kitten",

        b: "sitting",

        distance:
          result.distance,

        matrix:
          result.matrix
      });

      return true;
    }


    case 7: {

      printResult(
        "Damerau-Levenshtein",
        {
          a: "ca",

          b: "ac",

          distance:
            damerauLevenshteinDistance(
              "ca",
              "ac"
            )
        }
      );

      return true;
    }


    case 8: {

      printResult(
        "Weighted Edit Distance",
        {

          a: "paper",

          b: "papers",

          distance:
            weightedEditDistance(
              "paper",
              "papers",
              {
                insertion: 1,
                deletion: 1,
                substitution: 2
              }
            )
        }
      );

      return true;
    }


    case 9: {

      const result =
        needlemanWunsch(
          "GATTACA",
          "GCATGCU"
        );

      printResult(
        "Needleman-Wunsch",
        {
          a: "GATTACA",

          b: "GCATGCU",

          score:
            result.score,

          matrix:
            result.matrix
        }
      );

      return true;
    }


    case 10: {

      const result =
        smithWaterman(
          "ACACACTA",
          "AGCACACA"
        );

      printResult(
        "Smith-Waterman",
        {
          a: "ACACACTA",

          b: "AGCACACA",

          score:
            result.score,

          matrix:
            result.matrix
        }
      );

      return true;
    }


    // ----------------------------------------------------------
    // GRAPH
    // ----------------------------------------------------------

    case 11:
    case 12:
    case 13: {

      const capacity = [

        [0, 3, 2, 0],

        [0, 0, 0, 2],

        [0, 1, 0, 3],

        [0, 0, 0, 0]

      ];

      let result;


      if (number === 11) {

        result =
          fordFulkerson(
            capacity,
            0,
            3
          );

        printResult(
          "Ford-Fulkerson",
          result
        );

      }

      else if (number === 12) {

        result =
          edmondsKarp(
            capacity,
            0,
            3
          );

        printResult(
          "Edmonds-Karp",
          result
        );

      }

      else {

        result =
          dinic(
            capacity,
            0,
            3
          );

        printResult(
          "Dinic",
          result
        );
      }

      return true;
    }


    case 14: {

      const capacity = [

        [0, 3, 2, 0],

        [0, 0, 0, 2],

        [0, 1, 0, 3],

        [0, 0, 0, 0]

      ];

      const result =
        minimumCut(
          capacity,
          0,
          3
        );

      printResult(
        "Min-Cut",
        result
      );

      return true;
    }


    case 15: {

      const capacity = [

        [0, 3, 2, 0],

        [0, 0, 0, 2],

        [0, 1, 0, 3],

        [0, 0, 0, 0]

      ];

      const cost = [

        [0, 1, 4, 0],

        [0, 0, 0, 2],

        [0, 3, 0, 1],

        [0, 0, 0, 0]

      ];

      const result =
        minCostMaxFlow(
          capacity,
          cost,
          0,
          3
        );

      printResult(
        "Min-Cost Flow",
        result
      );

      return true;
    }


    // ----------------------------------------------------------
    // OPTIMIZATION
    // ----------------------------------------------------------

    case 16: {

      const items = [

        {
          weight: 2,
          value: 20
        },

        {
          weight: 3,
          value: 30
        },

        {
          weight: 4,
          value: 50
        }

      ];

      printResult(
        "Knapsack",
        {
          items,

          capacity: 5,

          maximumValue:
            knapsack(
              items,
              5
            )
        }
      );

      return true;
    }


    case 17: {

      const numbers = [
        3,
        5,
        7,
        10
      ];

      printResult(
        "Subset Sum",
        {
          numbers,

          target: 15,

          possible:
            subsetSum(
              numbers,
              15
            )
        }
      );

      return true;
    }


    case 18: {

      const vertices = [
        "A",
        "B",
        "C",
        "D"
      ];

      const edges = [

        ["A", "B"],

        ["A", "C"],

        ["B", "D"],

        ["C", "D"]

      ];

      const minimumCover =
        minimumVertexCover(
          vertices,
          edges
        );

      printResult(
        "Vertex Cover",
        {

          vertices,

          edges,

          minimumCover,

          isValid:
            isVertexCover(
              vertices,
              edges,
              minimumCover
            )
        }
      );

      return true;
    }


    case 19: {

      const vertices = [
        "A",
        "B",
        "C",
        "D"
      ];

      const edges = [

        ["A", "B"],

        ["A", "C"],

        ["B", "C"],

        ["B", "D"],

        ["C", "D"]

      ];

      printResult(
        "Clique",
        {

          vertices,

          edges,

          maximumClique:
            maximumClique(
              vertices,
              edges
            )
        }
      );

      return true;
    }


    case 20: {

      const distance = [

        [0, 10, 15, 20],

        [10, 0, 35, 25],

        [15, 35, 0, 30],

        [20, 25, 30, 0]

      ];

      printResult(
        "TSP",
        {

          distance,

          result:
            travelingSalesperson(
              distance
            )
        }
      );

      return true;
    }


    // ----------------------------------------------------------
    // RANDOMIZED
    // ----------------------------------------------------------

    case 21: {

      const input = [
        42,
        7,
        19,
        3,
        25,
        11
      ];

      printResult(
        "Randomized QuickSort",
        {

          input,

          ascending:
            randomizedQuickSortAscending(
              input
            ),

          descending:
            randomizedQuickSortDescending(
              input
            ),

          default:
            randomizedQuickSort(
              input
            )
        }
      );

      return true;
    }


    case 22: {

      const numbers = [
        2,
        17,
        19,
        21,
        97,
        100
      ];

      printResult(
        "Miller-Rabin",
        {

          testedNumbers:
            numbers,

          results:
            numbers.map(n => ({

              number: n,

              isPrime:
                isPrime(n)

            }))
        }
      );

      return true;
    }


    case 23: {

      const stream = [

        "paper01",

        "paper02",

        "paper03",

        "paper04",

        "paper05",

        "paper06",

        "paper07",

        "paper08"

      ];

      printResult(
        "Reservoir Sampling",
        {

          stream,

          sampleSize: 3,

          sample:
            reservoirSample(
              stream,
              3
            )
        }
      );

      return true;
    }


    default:

      console.log(
        "Invalid algorithm number."
      );

      return false;
  }
}


function runAll() {

  printHeader(
    "RUNNING ALL 23 DSA ALGORITHMS"
  );

  let passed = 0;

  for (
    let i = 1;
    i <= algorithms.length;
    i++
  ) {

    try {

      if (runAlgorithm(i)) {
        passed++;
      }

    }

    catch (error) {

      console.error(
        `\n[FAIL] ${algorithms[i - 1]}`
      );

      console.error(
        error.message
      );
    }
  }

  console.log(
    "\n" + "=".repeat(64)
  );

  console.log(
    `Completed: ${passed}/${algorithms.length} algorithm tests`
  );

  console.log(
    "=".repeat(64)
  );
}


function showMenu() {

  printHeader(
    "PAPERCHECK DSA ALGORITHM TESTER"
  );

  algorithms.forEach(
    (name, index) => {

      console.log(
        `${String(index + 1).padStart(2, " ")}. ${name}`
      );

    }
  );

  console.log(
    " 0. Run ALL"
  );

  console.log(
    "\nEnter an algorithm number:"
  );

  process.stdin.setEncoding("utf8");

  process.stdin.once(
    "data",
    input => {

      const choice =
        Number(input.trim());

      if (choice === 0) {

        runAll();

      }

      else if (

        Number.isInteger(choice) &&

        choice >= 1 &&

        choice <= algorithms.length

      ) {

        try {

          runAlgorithm(choice);

        }

        catch (error) {

          console.error(
            `\n[FAIL] ${algorithms[choice - 1]}`
          );

          console.error(error);
        }

      }

      else {

        console.log(
          "Invalid choice."
        );
      }

      process.stdin.pause();
    }
  );
}


if (require.main === module) {
  showMenu();
}