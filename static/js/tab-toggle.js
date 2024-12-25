/**
 * Scripts which manages Code Toggle tabs.
 */

function toggleTabs(event) {
    // Get all tabs and panes
    const allTabs = document.querySelectorAll("[data-toggle-tab]");
    const allPanes = document.querySelectorAll("[data-pane]");
    
    // Determine the target key
    let targetKey;
    if (event.target) {
        event.preventDefault();
        targetKey = event.currentTarget.getAttribute("data-toggle-tab");
    } else {
        targetKey = event;
    }

    // Store the selected language preference
    if (window.localStorage) {
        window.localStorage.setItem("configLangPref", targetKey);
    }

    // First, remove 'active' class from all tabs and panes
    allTabs.forEach(tab => tab.classList.remove("active"));
    allPanes.forEach(pane => pane.classList.remove("active"));

    // Then, add 'active' class only to matching tabs and panes
    const selectedTabs = document.querySelectorAll(`[data-toggle-tab='${targetKey}']`);
    const selectedPanes = document.querySelectorAll(`[data-pane='${targetKey}']`);

    selectedTabs.forEach(tab => tab.classList.add("active"));
    selectedPanes.forEach(pane => pane.classList.add("active"));
}

document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to all tabs
    const allTabs = document.querySelectorAll("[data-toggle-tab]");
    allTabs.forEach(tab => tab.addEventListener("click", toggleTabs));

    // Check localStorage for preferred language
    const storedPref = window.localStorage.getItem('configLangPref');
    if (storedPref) {
        toggleTabs(storedPref);
    } else {
        // Show the first tab by default if no preference is stored
        const firstTab = allTabs[0];
        if (firstTab) {
            toggleTabs({ 
                preventDefault: () => {},
                currentTarget: firstTab
            });
        }
    }
});