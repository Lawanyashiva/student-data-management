<?php
// Assignment 6: Triplet Sum Finder API

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $arrayInput = $_POST['array'] ?? '';
    $targetValue = $_POST['targetValue'] ?? '';

    if (empty($arrayInput) || $targetValue === '') {
        echo json_encode(['success' => false, 'message' => 'Array and target value are required']);
        exit;
    }

    // Parse array from input
    $array = array_filter(array_map('trim', explode(',', $arrayInput)));
    $array = array_map('intval', $array);
    $targetValue = (int)$targetValue;

    // Find triplets
    $result = findTriplets($array, $targetValue);

    echo json_encode([
        'success' => true,
        'array' => $array,
        'targetValue' => $targetValue,
        'found' => $result['found'],
        'triplets' => $result['triplets'],
        'count' => count($result['triplets'])
    ]);
}

function findTriplets($array, $target) {
    $triplets = [];
    $n = count($array);
    
    // Sort array for easier triplet finding
    sort($array);

    // Use three pointers approach
    for ($i = 0; $i < $n - 2; $i++) {
        $left = $i + 1;
        $right = $n - 1;

        while ($left < $right) {
            $sum = $array[$i] + $array[$left] + $array[$right];

            if ($sum == $target) {
                $triplet = [
                    'values' => [$array[$i], $array[$left], $array[$right]],
                    'sum' => $sum
                ];
                
                // Avoid duplicate triplets
                $found = false;
                foreach ($triplets as $existing) {
                    if ($existing['values'] == $triplet['values']) {
                        $found = true;
                        break;
                    }
                }
                
                if (!$found) {
                    $triplets[] = $triplet;
                }
                
                $left++;
                $right--;
            } elseif ($sum < $target) {
                $left++;
            } else {
                $right--;
            }
        }
    }

    return [
        'found' => count($triplets) > 0,
        'triplets' => $triplets
    ];
}

?>
