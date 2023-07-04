import { User } from "../../types/responseLoginUser";
import { FlexCol, FlexRow } from "../styles";
import profile from "../../assets/icons/profile/profile.svg";
import { UseIconsTecnologies } from "../../customHooks/IconsTecnologies";
import { useMemo } from "react";
import { TextInfo } from "./textInfo";

export const Targets = ({ user }: { user: User }) => {
  const { email, information, users_address, Photo } = user;
  const tecnologies = ["React", "JavaScript", "Typescript"];
  const { infoTecnologies, loading, setTecnologies } = UseIconsTecnologies();
  tecnologies.forEach((tecnology: string) =>
    setTecnologies({ name: tecnology })
  );
  const { lastName, name } = information;
  return (
    <FlexCol
      className=" w-2/3 md:w-2/5 lg:w-[26%] border border-black  rounded-md gap-4 bg-white shadow-sm
    shadow-neutral-800   hover:shadow-md col-span-2   delay-100 ease-in-out
    hover:shadow-black hover:scale-105 transition-[transform] duration-500 cursor-pointer  hover:brightness-95"
    >
      <FlexCol className="md:flex-row overflow-hidden  flex-wrap gap-2  justify-center items-stretch my-2">
        <FlexRow className="w-32 min-w-[32] justify-center items-center self-center">
          <img
            src={Photo ? Photo.url : profile}
            alt=""
            className="rounded-full w-40 h-32   border border-black hover:brightness-75"
          />
        </FlexRow>
        {information && users_address ? (
          <div>
            <TextInfo text={email} title="correo" />
            {name && (
              <TextInfo text={`${name} ${lastName}`} title="nombre completo" />
            )}

            <p>
              {users_address.city} {users_address.directions}{" "}
              {users_address.department} {users_address.country}
            </p>
          </div>
        ) : (
          <div>No hay informacion</div>
        )}
      </FlexCol>
      <FlexCol className="py-2 px-4">
        <TextInfo text="" title="Habilidades" />
        <FlexRow className="flex-1 gap-4 w-full overflow-auto ">
          {infoTecnologies.map(({ url, Tecnology }, i) => (
            <FlexCol className="items-center min-w-min" key={i}>
              <img
                src={url}
                alt={Tecnology}
                className="w-10 h-10 rounded-full"
                title={Tecnology}
              />
              <p className="font-mono" title={Tecnology}>
                {Tecnology}
              </p>
            </FlexCol>
          ))}
        </FlexRow>
      </FlexCol>
    </FlexCol>
  );
};
