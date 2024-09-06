import { Typography } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  
  const handleChange = () => {
    navigate('/coming-soon');
  };

  return (
    <footer className="w-full bg-slate-900 p-8 pt-5">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-y-6 gap-x-12 text-center pt-4">
        {/* Logo */}
        <div className="logo font-bold flex text-2xl">
          <span className="text-green-500">&lt;</span>
          <span className="text-white">CUI-Review/</span>
          <span className="text-green-500">&gt;</span>
        </div>

        {/* Navigation links */}
        <ul className="flex flex-col md:flex-row flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              onClick={handleChange}
              as="a"
              color="white"
              className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              onClick={handleChange}
              as="a"
              color="white"
              className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              onClick={handleChange}
              as="a"
              color="white"
              className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              onClick={handleChange}
              as="a"
              color="white"
              className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>

      <hr className="my-8 border-blue-gray-50" />

      {/* Footer text */}
      <Typography color="white" className="text-center font-normal">
        &copy; 2024 Coming Soon
      </Typography>
    </footer>
  );
}

export default Footer;
