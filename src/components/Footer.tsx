
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-800 text-gray-300 py-6 relative"> {/* Dark background, e.g., slate-800, gray-900 */}
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    www.GHRD.in - Copyright © {currentYear}. All rights reserved.
                </p>
            </div>

          
        </footer>
    );
};

export default Footer;