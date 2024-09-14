document.getElementById('copy-btn').addEventListener('click', function() {
    var textToCopy = document.getElementById('text-to-copy');
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        document.getElementById('copy-status').textContent = 'Text copied!';
    } catch (err) {
        document.getElementById('copy-status').textContent = 'Failed to copy text.';
    }
});

var textArea = document.getElementById('text-to-copy');
var charCount = textArea.value.length;
document.getElementById('char-count').textContent = `Character count: ${charCount}`;
document.getElementById('text-to-copy').addEventListener('input', function() {
    var textArea = document.getElementById('text-to-copy');
    var charCount = textArea.value.length;
    document.getElementById('char-count').textContent = `Character count: ${charCount}`;
    textArea.spellcheck = true;
});

