import { Routes as Rotas, Route } from "react-router-dom"
import { isLogado } from "./auth";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import Cadastro from "./pages/Cadastro/Cadastro";
import Usuarios from "./pages/Ususuarios/Usuarios";
import Configuracoes from "./pages/Cofiguracoes/Configuracoes";

function Routes() {
    return (
        <Rotas>
            <Route path="/login" element={<Login />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/usuarios" element={<Usuarios />} />
            {
                isLogado ? (
                    <>
                        <Route path="*" element={<NotFound />} />
                        <Route path= "/configuracoes" element={<Configuracoes/>} />
                    </>
                ) : (
                    <Route path="*" element={<Login />} />
                )


            }
        </Rotas>
    )
}




export default Routes;