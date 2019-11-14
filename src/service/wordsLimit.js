export const wordsL = (content, limtnum) => { // 总共两个字content为要测算的字符串长度，limtnum为需要限制的长度
    if (content.length > limtnum) {
        let result = content.substr(0, limtnum) + '..'
        return result
    } else {
        let result = content
        return result
    }
}