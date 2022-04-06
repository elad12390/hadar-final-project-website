
export const cacheImages = (images: string[]) => {
    Promise.resolve().then(async () => {
        const promises = images.map(src => new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject();
        }))

        await Promise.all(promises);
    })
}
