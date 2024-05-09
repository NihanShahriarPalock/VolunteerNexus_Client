import ThemeController from "./ThemeController";

const Navbar = () => {
    return (
        <>
            <h2 className="text-black dark:text-5xl dark:text-red-500">This is navbar</h2>
            <ThemeController></ThemeController>
        </>
    );
};

export default Navbar;