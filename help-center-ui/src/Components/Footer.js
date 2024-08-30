import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 mt-10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <h4 className="text-lg font-semibold">Abstract</h4>
                    <p className="text-gray-400">Branches</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Resources</h4>
                    <p className="text-gray-400">Blog</p>
                    <p className="text-gray-400">Help Center</p>
                    <p className="text-gray-400">Release Notes</p>
                    <p className="text-gray-400">Status</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Community</h4>
                    <p className="text-gray-400">Twitter</p>
                    <p className="text-gray-400">LinkedIn</p>
                    <p className="text-gray-400">Facebook</p>
                    <p className="text-gray-400">Dribble</p>
                    <p className="text-gray-400">Podcast</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Company</h4>
                    <p className="text-gray-400">About Us</p>
                    <p className="text-gray-400">Careers</p>
                    <p className="text-gray-400">Legal</p>
                    <p className="text-gray-400">Contact Us</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
