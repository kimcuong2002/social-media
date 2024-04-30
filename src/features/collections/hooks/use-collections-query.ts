import { OperationVariables, useMutation, useQuery } from '@apollo/client';
import {
  CollectionInputType,
  ResPaginationCollectionData,
  SavedType,
} from '../service';
import { CREATE_COLLECTION, GET_COLLECTIONS, GET_SAVED } from '../graphql';

export const useCreateCollections = () =>
  useMutation<{ variables: { body: CollectionInputType } }, OperationVariables>(
    CREATE_COLLECTION,
  );

export const useGetSaved = () => {
  return useQuery<{ getSaved: SavedType }, OperationVariables>(GET_SAVED);
};

export const useGetCollections = (
  idSaved: string,
  limit: number,
  page: number,
) => {
  return useQuery<
    { getCollections: ResPaginationCollectionData },
    OperationVariables
  >(GET_COLLECTIONS, {
    variables: {
      idSaved: idSaved,
      limit: limit,
      page: page,
    },
  });
};
