/**
 * Data Model Interfaces
 */

import { Item } from "./item.interface";
import * as ParserService from "../data/parser.service"
import path from "path";

const csvFilePath = path.join(__dirname, '..', 'data', 'population.csv');

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(await ParserService.parseCsv(csvFilePath));

// export const find = async (id: number): Promise<Item> => items[id];