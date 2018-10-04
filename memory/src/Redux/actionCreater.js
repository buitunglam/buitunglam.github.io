export function toggleIsAdding() {
    return ({
        type: 'TOGGLE_ADDING'
    });
}

export function addWord(en,vn) {
    return {
        type: "ADD_WORD",
        en,
        vn
    }
}

export  function memorizedWord(id) {
    return {
        type: "TOGGLE_MEMORIZED",
        id
    }
}

export function showMeaning(id) {
    return {
        type: "TOGGLE_SHOW",
        id
    }
}

export function showMemorized() {
    return {
        type: "FILTER_MEMORIZED"
    }
}
export function showAll() {
    return {
        type: "FILTER_SHOW_ALL"
    }
}
export function showNeedPractice() {
    return {
        type: "FILTER_NEED_PRACTICE"
    }
}