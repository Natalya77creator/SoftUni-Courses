function edit(ref, match, replaser) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replaser);
    ref.textContent = edited
}