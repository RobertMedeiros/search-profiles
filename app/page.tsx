"use client"

import { type } from "os";
import { searchProfile } from "./lib/api";
import { useEffect, useState } from "react";

export default function Home() {

  interface Profiles {
    name: {
      title: string,
      first: string,
      last: string,
    }
    gender: string,
    email: string,
    picture: {
      medium: string,
      thumbnail: string,
    }
  }

  const [profile, setProfile] = useState<Profiles[]>([]);

  useEffect(() => {
    searchProfile()
    .then((valores) => {
      setProfile(valores)
    })
  })

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Perfil</th>
              <th>Nome</th>
              <th>gender</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {profile.map((persons) => (
              <tr key={}>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
