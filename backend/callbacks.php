<?php 
function getCallbacks()
{
    return json_decode(file_get_contents("callbacks.json"), true);
}

function deleteCallback($id)
{
    $callbacks = getCallbacks();

    foreach ($callbacks as $i => $callback) {
        if($callback['GUID'] == $id) {
            array_splice($callbacks, $i, 1);
        }
    }
    file_put_contents("callbacks.json", json_encode($callbacks, JSON_PRETTY_PRINT));
}
?>