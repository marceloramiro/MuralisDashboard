import { useForm, SubmitHandler } from "react-hook-form";

import { MenuItem } from "@mui/material";
import { Button, InputText, Select } from "@/components";
import { MainContainer, Header, Title, Form, Footer } from "./styles";
import { getCourses } from "@/services/courses";
import { useEffect, useState } from "react";
import { getCityByState, getStates } from "@/services/address";
import { createEntrant, type Entrant } from "@/services/entrants";

interface FormInput {
  name: string;
  course: string;
  state: string;
  city: string;
}

interface FormCreateEntrantsProps {
  onClose: () => void;
}

function FormCreateEntrants({ onClose }: FormCreateEntrantsProps) {
  const [courses, setCourses] = useState<string[]>([]);
  const [states, setStates] = useState<
    {
      name: string;
      abbreviation: string;
    }[]
  >([]);
  const [cities, setCities] = useState<string[]>([]);

  const { register, handleSubmit, watch } = useForm();

  const selectedState = watch("state");

  const handleGetCourses = async () => {
    try {
      const coursesResponse = await getCourses();
      setCourses(() => [...coursesResponse.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetStates = async () => {
    try {
      const statesResponse = await getStates();
      setStates(() => [...statesResponse.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetCities = async (state: "SP" | "MG" | "RJ") => {
    try {
      const citiesResponse = await getCityByState(state);
      setCities(() => [...citiesResponse.data.cities]);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<Record<string, FormInput>> = async (data) => {
    try {
      const createResponse = await createEntrant({
        name: data.name,
        course: data.course,
        state: data.state,
        city: data.city,
      } as unknown as Entrant);
      console.log(createResponse);
    } catch (error) {
      console.error(error);
    } finally {
      onClose();
    }
  };

  useEffect(() => {
    handleGetCourses();
    handleGetStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      handleGetCities(selectedState);
    }
  }, [selectedState]);

  return (
    <MainContainer>
      <Header>
        <Title>Cadastro de ingressantes</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputText variant="outlined" label="Nome" {...register("name")} />
          <Select variant="outlined" label="Curso" {...register("course")}>
            {courses?.map((course) => (
              <MenuItem key={course} value={course}>
                {course}
              </MenuItem>
            ))}
          </Select>
          <Select variant="outlined" label="Estado" {...register("state")}>
            {states?.map((state) => (
              <MenuItem key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
          <Select variant="outlined" label="Cidade" {...register("city")}>
            {cities?.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
          <Footer>
            <Button variant="contained" color="warning" onClick={onClose}>
              Voltar
            </Button>
            <Button variant="contained" color="success" type="submit">
              Gravar
            </Button>
          </Footer>
        </Form>
      </Header>
    </MainContainer>
  );
}

export { FormCreateEntrants };
