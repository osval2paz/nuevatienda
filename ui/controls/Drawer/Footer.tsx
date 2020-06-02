import React from "react";
import {BoxProps, DrawerFooter} from "@chakra-ui/core";

const Footer: React.FC<BoxProps> = (props) => (
  <DrawerFooter paddingX={{base: 4, sm: 12}} {...props} />
);

export default Footer;
