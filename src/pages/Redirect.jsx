import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { detectDevice } from '../utils/detectDevice';

const Redirect = () => {
    const { id } = useParams();
    const originalUrl = localStorage.getItem(id);

    useEffect(() => {
        if (!originalUrl) return;

        const device = detectDevice();
        const appLink = getAppLink(originalUrl, device);

        window.location.href = appLink;
        setTimeout(() => {
            window.location.href = originalUrl;
        }, 2000);
    }, [id]);

    const getAppLink = (url, device) => {
        if (url.includes('instagram.com')) {
            if (device === 'Android') return `intent://${url.replace('https://', '')}#Intent;package=com.instagram.android;scheme=https;end`;
            if (device === 'iOS') return `instagram://app`;
        }
        return url;
    };

    if (!originalUrl) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-4">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-xl text-center shadow-lg text-white">
                    <h2 className="text-2xl font-bold text-red-400 mb-2">⚠️ Link Not Found</h2>
                    <p className="text-gray-300">This link is invalid or has expired.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg text-center text-white max-w-md w-full">
                <h2 className="text-2xl font-bold mb-2">Opening in App...</h2>
                <p className="text-gray-300">
                    If it doesn't open automatically,
                    <br />
                    <a href={originalUrl} className="text-purple-400 underline">click here</a>.
                </p>
            </div>
        </div>
    );
};

export default Redirect;