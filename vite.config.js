import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
    base: "/goit-react-hw-03/",
plugins: [react()],
build: {
sourcemap: true,
}
});
