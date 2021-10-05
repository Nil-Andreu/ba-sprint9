- Put the detail in the same page as the initial one (we can divide this components, and the one of detail have this function)
- Other exercises

<Detail
              key={idStarship}
              id={idStarship}
              // And for the button to be able to change the detailRenderer value
              setDetailRenderer={setDetailRenderer}
              detailRenderer={detailRenderer}
            />

{data.map((i) => {
            idStarship += 1

            return (
              <ListCard key={idStarship} onClick={() => setDetailRenderer(!detailRenderer)}>
                <ListCardTitle>{i.name}</ListCardTitle>
                <ListCardType>{i.model}</ListCardType>
                </ListCard>
              );
              )}