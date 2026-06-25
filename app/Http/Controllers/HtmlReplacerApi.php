<?php
// Assignment 5: HTML Find & Replace API

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $htmlContent = $_POST['htmlContent'] ?? '';
    $replacements = json_decode($_POST['replacements'] ?? '[]', true);

    if (empty($htmlContent)) {
        echo json_encode(['success' => false, 'message' => 'HTML content is required']);
        exit;
    }

    $resultContent = $htmlContent;

    foreach ($replacements as $replacement) {
        $find = $replacement['find'] ?? '';
        $replace = $replacement['replace'] ?? '';
        
        if ($find) {
            $resultContent = str_replace($find, $replace, $resultContent);
        }
    }

    echo json_encode([
        'success' => true,
        'original' => $htmlContent,
        'result' => $resultContent,
        'replacementsApplied' => count($replacements),
        'replacements' => $replacements
    ]);
}
?>
