import { OperationVariables, useMutation, useQuery } from '@apollo/client';
import { CollectionInputType, SavedType } from '../service';
import { CREATE_COLLECTION, GET_SAVED } from '../graphql';

export const useCreateCollections = () =>
  useMutation<{ variables: { body: CollectionInputType } }, OperationVariables>(
    CREATE_COLLECTION,
  );

export const useGetSaved = () => {
  return useQuery<{ getSaved: SavedType }, OperationVariables>(GET_SAVED);
};
