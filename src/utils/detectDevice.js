export const detectDevice = () => {
    const ua = navigator.userAgent;
    if(/android/i.test(ua)) return 'Android';
    if(/iPad|iPhone|iPod/.test(ua)) return 'iOS';
    return 'Desktop';
}