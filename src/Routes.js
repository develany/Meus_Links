import { Routes as Rotas, Route } from "react-router-dom"
import { isLogado } from "./auth";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import Cadastro from "./pages/Cadastro/Cadastro";

function Routes() {
    return (
        <Rotas>
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cadastro" element={<Cadastro />} />

            {
                isLogado ? (
                    <>
                        <Route path="*" element={<NotFound />} />

                    </>
                ) : (
                    <Route path="*" element={<Login />} />
                )


            }
        </Rotas>
    )
}




export default Routes;