import { FC, useEffect, useMemo } from "react";
import Styled from "./EditSideBar.styled";
import { Form, Select } from "@components";
import { ButtonCross } from "@components";
import { useForm } from "react-hook-form";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import { partial, Struct } from "superstruct";
import { toast } from "react-hot-toast";
import nextId from "react-id-generator";

export interface Option {
  label: string;
  value: string | number;
}

export interface Input {
  id: string;
  label: string;
  defaultValue?: string;
  type?: "text" | "select" | "number" | "datetime";
  options?: Option[];
}

interface Props {
  label: string;
  mode: "create" | "edit";
  inputs: Input[];
  onClose?: () => void;
  onSubmit: (data: any, mode: "create" | "edit") => void;
  schema: Struct<any, any>;
  editedObject?: any;
}

export const EditSideBar: FC<Props> = ({
  label,
  mode,
  inputs,
  onClose,
  onSubmit,
  schema,
  editedObject,
}) => {
  const form = useForm({
    resolver: superstructResolver(mode === "create" ? schema : partial(schema)),
    reValidateMode: "onChange",
    defaultValues: mode === "edit" ? editedObject : undefined,
  });

  useEffect(() => form.reset(), [editedObject]);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h2>
          {label} - {mode === "create" ? "pridať" : "upraviť"}
        </h2>
        <Styled.BtnOffset>
          <ButtonCross onClick={onClose} />
        </Styled.BtnOffset>
      </Styled.Header>
      <Styled.InputGrid key={nextId()}>
        {inputs?.map((input) => {
          if (input?.type === "text" || input?.type === undefined) {
            const isError = form.formState.errors?.[input.id];

            return (
              <Form.Input.Base key={nextId()}>
                <Form.Input.Label error={isError}>
                  {input.label}
                </Form.Input.Label>
                <Form.Input.Input
                  error={isError}
                  type={input.type}
                  width="100%"
                  {...form.register(input.id)}
                  key={nextId()}
                  defaultValue={editedObject?.[input.id]}
                />
              </Form.Input.Base>
            );
          }
          if (input?.type === "number") {
            const isError = form.formState.errors?.[input.id];

            return (
              <Form.Input.Base key={nextId()}>
                <Form.Input.Label error={isError}>
                  {input.label}
                </Form.Input.Label>
                <Form.Input.Input
                  error={isError}
                  type={input.type}
                  width="100%"
                  {...form.register(input.id, { valueAsNumber: true })}
                  key={nextId()}
                />
              </Form.Input.Base>
            );
          }
          if (input?.type === "datetime") {
            const isError = form.formState.errors?.[input.id];

            return (
              <Form.Input.Base key={nextId()}>
                <Form.Input.Label error={isError}>
                  {input.label}
                </Form.Input.Label>
                <Form.Input.Input
                  error={isError}
                  type="datetime-local"
                  width="100%"
                  onChange={(e) => form.setValue(input.id, e.target.value)}
                  defaultValue={input.defaultValue}
                  key={nextId()}
                />
              </Form.Input.Base>
            );
          }
          if (input?.type === "select") {
            return (
              <Select
                id={input.id}
                label={input.label}
                options={input.options}
                defaultValue={{
                  label: input.options?.find(
                    (opt) => opt.value === editedObject?.[input.id],
                  )?.label,
                  value: editedObject?.[input.id],
                }}
                onChange={(val) => {
                  const selected = val as Option;
                  form.setValue(input.id, selected.value);
                }}
                key={nextId()}
              />
            );
          }
        })}
      </Styled.InputGrid>
      <Styled.Button
        onClick={async () => {
          const isValid = await form.trigger();
          console.log(form.formState.errors);
          if (isValid) {
            if (mode === "edit") {
              if (!form.getValues()?.id) {
                form.setValue("id", editedObject?.id);
              }
            }

            onSubmit(form.getValues(), mode);
            toast.success("Záznam úspešne nahraný!");
          } else {
            toast.error("Záznam obsahuje chyby!");
          }
        }}
      >
        Odoslať
      </Styled.Button>
    </Styled.Wrapper>
  );
};
