
import { Link, Plus } from "lucide-react";
import CustomButton from "./custombutton";
import SignUpNavbar from "@/app/PageComponents/navbars/custom-navbars/signUpNavbar";
import LandingPageNavbar from "@/app/PageComponents/navbars/custom-navbars/LandingPageNavbar";
import GameCustomizeNavBar from "@/app/PageComponents/navbars/custom-navbars/GameCustomizeNavBar";
import JoinGameNavbar from "@/app/PageComponents/navbars/custom-navbars/JoinGameNavbar";
import ForgotPasswordNavbar from "@/app/PageComponents/navbars/custom-navbars/ForgotPasswordNavbar";
import AlphabethGameScreenNavbar from "@/app/PageComponents/navbars/custom-navbars/AlphabethGameScreenNavbar";

export default function SampleButtons() {
  //create the following functions 
  //onLogin, onSignup, handleHowToPlayClick, handleShowMenu
  const onLogin = () => {
    console.log("Login function called");
  }
  const onSignup = () => {
    console.log("Login function called");
  }
  const handleHowToPlayClick = () => {
    console.log("Login function called");
  }
  const handleShowMenu = () => {
    console.log("Login function called");
  }

  return (
    <>
      <h1 className="text-2xl !text-left font-bold mt-8 mb-4"> Buttons </h1>

      <div
        className="grid w-full grid-cols-5 items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Default Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton>Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Secondary Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="secondary">Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Destructive Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="destructive">Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Outline Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="outline">Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Outline Icon Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="icon"
              isIconOnly={true}
              icon={<Plus />}
            />
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Yellow Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton variant='subtle' isLeftIconVisible={true} icon={<Link />}>
              Button CTA
            </CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Right Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton variant='subtle' isRightIconVisible={true} icon={<Link />}>
              Button CTA
            </CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Loading Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="loading" isLoading={true} />
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Link Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="link" size="link">
              Button CTA
            </CustomButton>
          </div>
        </div>
      </div>
      <h1 className="text-2xl !text-left font-bold mt-8 mb-4">Navbars</h1>
      <p>All custom navbars have been made available in the components folder inside the app/components/navbars/custom-navbars directory</p>
      <div>
        <h2>SignUp Navbar</h2>
        <div>
          <SignUpNavbar
            onLogin={onLogin}
            handleHowToPlayClick={handleHowToPlayClick}
            handleShowMenu={handleShowMenu} />
        </div>
      </div>
      <div>
        <h2>LandingPageNavBar Navbar</h2>
        <div>
          <LandingPageNavbar
            onLogin={onLogin}
            onSignup={onSignup}
            handleHowToPlayClick={handleHowToPlayClick}
            handleShowMenu={handleShowMenu} />
        </div>
      </div>
      <p>Four other custom navbars can be found in same folder plus a default navcard which takes in children props. Hover on them after importing them to see the props they require</p>
    </>
  );
}
